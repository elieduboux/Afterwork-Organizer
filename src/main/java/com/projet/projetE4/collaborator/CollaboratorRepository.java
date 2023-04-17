package com.projet.projetE4.collaborator;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface CollaboratorRepository extends
        JpaRepository<Collaborator,Long> {

    @Query("SELECT c FROM Collaborator c WHERE c.email = ?1")
    //@Query("SELECT c FROM Collaborator c WHERE c.email like ?1")
    Optional<Collaborator> findCollaboratorByEmail(String email);


//    List<Collaborator> findByNameContaining(String name);

}
