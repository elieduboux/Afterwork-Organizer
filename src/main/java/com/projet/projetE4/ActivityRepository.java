package com.projet.projetE4;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<ActivityEntity, Long>{
	Optional<ActivityEntity> findById(Long id);
	List<ActivityEntity> findByNameContaining(String name);
	List<ActivityEntity> findByCollaborator(String collaborator);
}
