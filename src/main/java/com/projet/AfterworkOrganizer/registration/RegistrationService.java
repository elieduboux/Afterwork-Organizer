package com.projet.AfterworkOrganizer.registration;

import com.projet.AfterworkOrganizer.collaborator.Collaborator;
import com.projet.AfterworkOrganizer.collaborator.CollaboratorRole;
import com.projet.AfterworkOrganizer.collaborator.CollaboratorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final CollaboratorService collaboratorService;
    private EmailValidator emailValidator;
    public String register(RegistrationRequest request) throws IllegalAccessException {
        boolean isValidEmail =  emailValidator.test(request.getEmail());
        if (!isValidEmail){
            throw new IllegalAccessException("email not valid");
        }
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
