package com.projet.projetE4.registration;

import com.projet.projetE4.collaborator.Collaborator;
import com.projet.projetE4.collaborator.CollaboratorRole;
import com.projet.projetE4.collaborator.CollaboratorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final CollaboratorService collaboratorService;
    private EmailValidator emailValidator;
    public String register(RegistrationRequest request) throws IllegalAccessException {
        return collaboratorService.signUpCollaborator(
                new Collaborator(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getAdresse(),
                        request.getPassword(),
                        CollaboratorRole.USER
                )
        );
    }
}
