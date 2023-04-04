package com.projet.projetE4;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("/activities")
public class MyController {

	@Autowired
    private final ActivityRepository activityRepository;

    public MyController(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @GetMapping
    public List<ActivityEntity> getActivities() {
        return activityRepository.findAll();
    }

    @GetMapping("/{id}")
    public ActivityEntity getActivity(@PathVariable Long id) {
        return activityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Activity not exist with id :" + id));
    }

    @PostMapping
    public ActivityEntity createActivity(@RequestBody ActivityEntity activity) throws URISyntaxException {
    	return activityRepository.save(activity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ActivityEntity> updateActivity(@PathVariable Long id, @RequestBody ActivityEntity activity) {
    	ActivityEntity currentActivity = activityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Activity not exist with id :" + id));
    	currentActivity.setName(activity.getName());
    	currentActivity.setType(activity.getType());
    	currentActivity.setOrganisator(activity.getOrganisator());
    	currentActivity.setCollaborator(activity.getCollaborator());
    	currentActivity = activityRepository.save(activity);

        return ResponseEntity.ok(currentActivity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteActivity(@PathVariable Long id) {
    	activityRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}