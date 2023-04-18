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
//    @Enumerated (EnumType.STRING)
    private String collaboratorRole;
    private Boolean locked = false;
    private Boolean enabled = true;

    @ManyToMany(mappedBy = "collaborators", fetch = FetchType.EAGER)
    private Set<ActivityEntity> activities = new HashSet<>();

    public Collaborator(String firstName, String lastName,
                        String email, String adresse,
                        String password, String collaboratorRole) {
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
//        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(collaboratorRole.name());
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("USER");
        return Collections.singleton(authority);
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Collaborator that = (Collaborator) o;
        return Objects.equals(id, that.id) && Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) && Objects.equals(email, that.email) &&
                Objects.equals(adresse, that.adresse) && Objects.equals(password, that.password) &&
                Objects.equals(collaboratorRole, that.collaboratorRole) && Objects.equals(locked, that.locked) &&
                Objects.equals(enabled, that.enabled) && Objects.equals(activities, that.activities);
    }

//    @Override
//    public int hashCode() {
//        return Objects.hash(id, firstName, lastName, email, adresse, password, collaboratorRole, locked, enabled, activities);
//    }

    public void printActivities(){
        for (ActivityEntity c: activities) {
            System.out.println(c.getName());
        }
    }

}
