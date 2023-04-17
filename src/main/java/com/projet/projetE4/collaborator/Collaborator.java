package com.projet.projetE4.collaborator;

import com.projet.projetE4.Activity.ActivityEntity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Table(name= "Collaborator")
public class Collaborator implements UserDetails {
    @Id
    @SequenceGenerator(
            name = "collaborator_sequence",
            sequenceName = "collaborator_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "collaborator_sequence"
    )
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String adresse;
    private String password;
    @Enumerated (EnumType.STRING)
    private CollaboratorRole collaboratorRole;
    private Boolean locked = false;
    private Boolean enabled = true;

    @ManyToMany(mappedBy = "collaborators", fetch = FetchType.LAZY)
    private List<ActivityEntity> activities = new ArrayList<>();

    public Collaborator(String firstName, String lastName,
                        String email, String adresse,
                        String password, CollaboratorRole collaboratorRole) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.adresse = adresse;
        this.password = password;
        this.collaboratorRole = collaboratorRole;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String toString() {
        return "Collaborator{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", adresse='" + adresse + '\'' +
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority autority = new SimpleGrantedAuthority(collaboratorRole.name());
        return Collections.singleton(autority);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

}
