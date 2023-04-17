package com.projet.projetE4.Activity;

import java.util.List;

import com.projet.projetE4.collaborator.Collaborator;
import com.projet.projetE4.collaborator.CollaboratorRole;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;


@CrossOrigin(origins = "http://localhost:8100")
@Controller
@AllArgsConstructor
public class MyController {

	@Autowired
    private final ActivityRepository activityRepository;

    @RequestMapping(value = { "/", "/activityList" }, method = RequestMethod.GET)
    public String activityList(Model model) {
        List<ActivityEntity>listActivity = activityRepository.findAll();
        model.addAttribute("listActivity", listActivity);
        return "activityList";
    }

    @RequestMapping(value = "/new", method = RequestMethod.GET)
    public String add(WebRequest request, Model model) {
        model.addAttribute("activity", new ActivityEntity());
        return "newActivity";
    }

    @PostMapping("/saveActivity")
    public String saveActivity(ActivityRequest activityRequest) {
        ActivityEntity activity = new ActivityEntity(
                activityRequest.getName(),
                activityRequest.getType(),
                activityRequest.getOrganisator(),
                activityRequest.getCollaborator());
        activityRepository.save(activity);
        return "redirect:/";
    }

    @PostMapping("updateActivity/{id}")
    public String updateActivity(ActivityRequest activityRequest, @PathVariable Long id) {

        ActivityEntity currentActivity = activityRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Activity not exist with id :" + id));
        currentActivity.setName(activityRequest.getName());
        currentActivity.setType(activityRequest.getType());
        currentActivity.setOrganisator(activityRequest.getOrganisator());
        currentActivity.setCollaborator(activityRequest.getCollaborator());
        activityRepository.save(currentActivity);
        return "redirect:/";
    }

    @RequestMapping("/editActivity/{id}")
    public String editActivity(@PathVariable("id") Long id, Model model) {
    	ActivityEntity currentActivity = activityRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Activity not exist with id :" + id));

        model.addAttribute("activity",currentActivity);
        return "editActivity";
    }

    @RequestMapping("/deleteActivity/{id}")
    public String deleteActivity(@PathVariable Long id) {
    	activityRepository.deleteById(id);
        return "redirect:/";
    }
}