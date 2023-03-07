package com.projet.AfterworkOrganizer;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CollaboratorService {

    private final CollaboratorRepository collaboratorRepository;

    @Autowired
    public CollaboratorService(CollaboratorRepository collaboratorRepository) {
        this.collaboratorRepository = collaboratorRepository;
    }

    public List<Collaborator> getCollaborators()
    {
        return collaboratorRepository.findAll();
    }

    public void addNewCollaborator(Collaborator collaborator) throws IllegalAccessException {
        Optional<Collaborator> collaboratorOptional = collaboratorRepository.findCollaboratorByEmail(collaborator.getEmail());
        if (collaboratorOptional.isPresent())
        {
            throw new IllegalAccessException("email taken");
        }
        collaboratorRepository.save(collaborator);
    }

    public void deleteCollaborator(Long collaboratorId) throws IllegalAccessException {
        if (!collaboratorRepository.existsById(collaboratorId)){
            throw new IllegalAccessException("collaborator with id "+ collaboratorId + " does not exists");
        }
        collaboratorRepository.deleteById(collaboratorId);
    }

    @Transactional
    public void updateCollaborator(Long collaboratorId, String name, String email) throws IllegalAccessException {
        Collaborator collaborator = collaboratorRepository.findById(collaboratorId).
                orElseThrow(()-> new IllegalStateException(
                        "collaborator with id "+ collaboratorId + " does not exists"
                ));
        if (name != null && name.length() > 0 &&
                !Objects.equals(collaborator.getName(),name)){
            collaborator.setName(name);
        }

        if (email != null && email.length() > 0 &&
                !Objects.equals(collaborator.getEmail(),email)){
            Optional<Collaborator> studentOptional = collaboratorRepository.findCollaboratorByEmail(collaborator.getEmail());
            if (studentOptional.isPresent()) {
                throw new IllegalAccessException("email taken");
            }
            collaborator.setEmail(email);
        }
    }
}
