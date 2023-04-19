package com.projet.projetE4.collaborator;

import com.projet.projetE4.Activity.ActivityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface    CollaboratorRepository extends
        JpaRepository<Collaborator,Long> {

    @Query("SELECT c FROM Collaborator c WHERE c.email = ?1")
    Optional<Collaborator> findCollaboratorByEmail(String email);

    @Query("from ActivityEntity a left join fetch a.collaborators i where i.email = ?1")
    List<ActivityEntity> findAllBySubscribe(String email);

}
