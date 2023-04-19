package com.projet.projetE4.Activity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ActivityRepository extends JpaRepository<ActivityEntity, Long>{

    @Query("select p from ActivityEntity p where p.organizer = ?1")
    List<ActivityEntity> findAllByOrganizer(String organizer);

}
