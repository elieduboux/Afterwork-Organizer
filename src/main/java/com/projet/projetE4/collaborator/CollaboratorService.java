package com.projet.projetE4.collaborator;


import com.projet.projetE4.Activity.ActivityEntity;
import com.projet.projetE4.Activity.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CollaboratorService implements UserDetailsService {

    private final CollaboratorRepository collaboratorRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final static String USER_NOT_FOUND_EMAIL_MSG =
            "user with email %s not found";

    private final static String USER_NOT_FOUND_ID_MSG =
            "user with id %s not found";

    private final static String EMAIL_ALREADY_TAKEN_MSG =
            "the email %s is already taken";

    public List<Collaborator> getCollaborators()
    {
        return collaboratorRepository.findAll();
        //TODO: Faire une fonctionnalité de recherche par page : critère de tri
    }

    public void addNewCollaborator(Collaborator collaborator) throws IllegalAccessException {
        //TODO: optimisation --> activityList.html
        Optional<Collaborator> collaboratorOptional = collaboratorRepository.findCollaboratorByEmail(collaborator.getEmail());
        if (collaboratorOptional.isPresent())
        {
            throw new IllegalAccessException(String.format(EMAIL_ALREADY_TAKEN_MSG,collaborator.getEmail()));
        }
        collaboratorRepository.save(collaborator);
    }

    public void deleteCollaborator(Long collaboratorId) throws IllegalAccessException {
        if (!collaboratorRepository.existsById(collaboratorId)){
            throw new IllegalAccessException(String.format(USER_NOT_FOUND_ID_MSG,collaboratorId));
        }
        collaboratorRepository.deleteById(collaboratorId);
    }

    @Transactional
    public void updateCollaborator(Long collaboratorId, String email) throws IllegalAccessException {
        Collaborator collaborator = collaboratorRepository.findById(collaboratorId).
                orElseThrow(()->
                        new IllegalStateException(String.format(USER_NOT_FOUND_ID_MSG,collaboratorId)
                ));

        if (email != null && email.length() > 0 &&
                !Objects.equals(collaborator.getEmail(),email)){
            Optional<Collaborator> collaboratorOptional = collaboratorRepository.findCollaboratorByEmail(collaborator.getEmail());
            if (collaboratorOptional.isPresent()) {
                throw new IllegalAccessException(String.format(EMAIL_ALREADY_TAKEN_MSG,email));
            }
            collaborator.setEmail(email);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return collaboratorRepository.findCollaboratorByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException(String.format(USER_NOT_FOUND_EMAIL_MSG,email)));
    }

    public String signUpCollaborator(Collaborator collaborator) throws IllegalAccessException {
        boolean collaboratorExists = collaboratorRepository.findCollaboratorByEmail(collaborator.getEmail())
                .isPresent();
        try {
            if (collaboratorExists){
                throw new IllegalAccessException(String.format(EMAIL_ALREADY_TAKEN_MSG,collaborator.getEmail()));
            }
        }catch (Exception e){
            return "redirect:/signUp";
        }

        String encodedPassword = bCryptPasswordEncoder.encode(collaborator.getPassword());

        collaborator.setPassword(encodedPassword);

        collaboratorRepository.save(collaborator);

        //TODO: send confirmation token

        return "register_success";
    }

//    public String unsubscribeActivity(@PathVariable Long id, Model model, Principal principal) {
////        if (principal == null){
////            return activityList(model, null);
////        }
//        ActivityEntity currentActivity = activityRepository.findById(id).orElseThrow(()
//                -> new ResourceNotFoundException("Activity not exist with id :" + id));
//
//        Collaborator loginUser = (Collaborator) ((Authentication) principal).getPrincipal();
//
//        loginUser.removeActivity(currentActivity);
//
//        System.out.println("*** BEFORE unsubscribe ***");
//        currentActivity.printCollaborators();
//        loginUser.printActivities();
//        loginUser.getActivities().remove(currentActivity);
//        currentActivity.getCollaborators().remove(loginUser);
//
//        System.out.println("*** AFTER unsubscribe ***");
//        currentActivity.printCollaborators();
//        loginUser.printActivities();
//        activityRepository.save(currentActivity);
//        return "redirect:/";
//    }
}
