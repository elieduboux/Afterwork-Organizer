package com.projet.AfterworkOrganizer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CollaboratorRepository extends
        JpaRepository<Collaborator,Long> {

    @Query("SELECT c FROM Collaborator c WHERE c.email = ?1")
    Optional<Collaborator> findCollaboratorByEmail(String email);

}
