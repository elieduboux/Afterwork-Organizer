package com.projet.projetE4.Activity;

import java.security.Principal;
import java.util.List;

import com.projet.projetE4.collaborator.Collaborator;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;


@CrossOrigin(origins = "http://localhost:8100")
@Controller
@AllArgsConstructor
public class MyController {

	@Autowired
    private final ActivityRepository activityRepository;

    @RequestMapping(value = { "/", "/activityList"}, method = RequestMethod.GET)
    public String activityList(Model model, Principal principal) {
        if (principal != null) {
            Collaborator loginUser = (Collaborator) ((Authentication) principal).getPrincipal();
            String userInfo = loginUser.toString();
            model.addAttribute("userInfo", userInfo);
        }
        List<ActivityEntity>listActivity = activityRepository.findAll();
        model.addAttribute("listActivity", listActivity);
        return "activityList";
    }

    @RequestMapping(value = {"/myActivities" }, method = RequestMethod.GET)
    public String myActivities(Model model, Principal principal) {
        if (principal == null){
            return activityList(model, null);
        }
        Collaborator loginUser = (Collaborator) ((Authentication) principal).getPrincipal();
        String email = loginUser.getEmail();
        List<ActivityEntity>listActivity = activityRepository.findAllByOrganizer(email);
        model.addAttribute("listActivity", listActivity);
        return "myActivities";
    }

    @RequestMapping(value = "/new", method = RequestMethod.GET)
    public String add(WebRequest request, Principal principal, Model model) {
        if (principal == null){
            return activityList(model, null);
        }
        model.addAttribute("activity", new ActivityEntity());
        return "newActivity";
    }

    @PostMapping("/saveActivity")
    public String saveActivity(ActivityRequest activityRequest, Principal principal, Model model) {
        if (principal == null){
            return activityList(model, null);
        }
        ActivityEntity activity = new ActivityEntity(
                activityRequest.getName(),
                activityRequest.getAddress(),
                activityRequest.getDate(),
                activityRequest.getTime(),
                activityRequest.getDuration(),
                activityRequest.getParticipants(),
                activityRequest.getType(),
                activityRequest.getOrganizer());
        activityRepository.save(activity);
        return "redirect:/";
    }

    @RequestMapping(value="updateActivity/{id}", method = RequestMethod.GET)
    public String updateActivity(ActivityRequest activityRequest, @PathVariable Long id,
                                 Principal principal, Model model ) {
        if (principal == null){
            return activityList(model, null);
        }
        Collaborator loginUser = (Collaborator) ((Authentication) principal).getPrincipal();
        String email = loginUser.getEmail();
        ActivityEntity currentActivity = activityRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Activity not exist with id :" + id));

        if (!email.equals(currentActivity.getOrganizer())){
            return activityList(model, principal);
        }

        currentActivity.setName(activityRequest.getName());
        currentActivity.setAddress(activityRequest.getAddress());
        currentActivity.setDate(activityRequest.getDate());
        currentActivity.setTime(activityRequest.getTime());
        currentActivity.setDuration(activityRequest.getDuration());
        currentActivity.setParticipants(activityRequest.getParticipants());
        currentActivity.setType(activityRequest.getType());
        activityRepository.save(currentActivity);
        return "redirect:/";
    }

    @RequestMapping("/editActivity/{id}")
    public String editActivity(@PathVariable("id") Long id, Model model, Principal principal) {
        if (principal == null){
            return activityList(model, null);
        }
        Collaborator loginUser = (Collaborator) ((Authentication) principal).getPrincipal();
        String email = loginUser.getEmail();
        ActivityEntity currentActivity = activityRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Activity not exist with id :" + id));

        if (!email.equals(currentActivity.getOrganizer())){
            return activityList(model, principal);
        }

        model.addAttribute("activity",currentActivity);
        return "editActivity";
    }

    @RequestMapping("/deleteActivity/{id}")
    public String deleteActivity(@PathVariable Long id, Model model, Principal principal) {
        if (principal == null){
            return activityList(model, null);
        }
        Collaborator loginUser = (Collaborator) ((Authentication) principal).getPrincipal();
        String email = loginUser.getEmail();
        ActivityEntity currentActivity = activityRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Activity not exist with id :" + id));

        if (!email.equals(currentActivity.getOrganizer())){
            return activityList(model, principal);
        }

    	activityRepository.deleteById(id);
        return "redirect:/";
    }
}