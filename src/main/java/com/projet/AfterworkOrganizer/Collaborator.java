package com.projet.AfterworkOrganizer;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name= "Collaborator")
@Getter
@Setter
public class Collaborator {
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
    private String name;
    private String email;
    private String adresse;

    public Collaborator(Long id,
                   String name,
                   String email,
                        String adresse) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.adresse = adresse;
    }
    public Collaborator(
                        String name,
                        String email,
                        String adresse) {
        this.name = name;
        this.email = email;
        this.adresse = adresse;
    }

    public Collaborator() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    @Override
    public String toString() {
        return "Collaborator{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", adresse='" + adresse + '\'' +
                '}';
    }
}
