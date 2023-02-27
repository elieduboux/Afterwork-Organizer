package com.projet.projetE4;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@RequestMapping(path = "/api")
@CrossOrigin(origins="http://localhost:8093")
public class RestController {

	@Autowired
	ActivityRepository activityRepository;
	
	@GetMapping("/activities")
	public ResponseEntity<List<ActivityEntity>> getAllActivities(@RequestParam(required = false) String name) {
		try {
			List<ActivityEntity> activities = new ArrayList<ActivityEntity>();

			if (name == null)
				activityRepository.findAll().forEach(activities::add);
			else
				activityRepository.findByNameContaining(name).forEach(activities::add);

			if (activities.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(activities, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/activities/{id}")
	public ResponseEntity<ActivityEntity> getActivityById(@PathVariable("id") Long id) {
		Optional<ActivityEntity> activityData = activityRepository.findById(id);

		if (activityData.isPresent()) {
			return new ResponseEntity<>(activityData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/activities")
	public ResponseEntity<ActivityEntity> createActivity(@RequestBody ActivityEntity activity) {
		try {
			ActivityEntity _activity = activityRepository
					.save(new ActivityEntity(activity.getId(), activity.getName(),activity.getType(), activity.getOrganisator(), activity.getCollaborator()));
			return new ResponseEntity<>(_activity, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/activities/{id}")
	public ResponseEntity<ActivityEntity> updateActivity(@PathVariable("id") Long id, @RequestBody ActivityEntity activity) {
		Optional<ActivityEntity> activityData = activityRepository.findById(id);

		if (activityData.isPresent()) {
			ActivityEntity _activity = activityData.get();
			_activity.setId(activity.getId());
			_activity.setName(activity.getName());
			_activity.setType(activity.getType());
			_activity.setOrganisator(activity.getOrganisator());
			_activity.setCollaborator(activity.getCollaborator());
			return new ResponseEntity<>(activityRepository.save(_activity), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/activities/{id}")
	public ResponseEntity<HttpStatus> deleteActivity(@PathVariable("id") Long id) {
		try {
			activityRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/tutorials")
	public ResponseEntity<HttpStatus> deleteAllActivities() {
		try {
			activityRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/activities/{collaborator}")
	public ResponseEntity<List<ActivityEntity>> findByCollaborator(@PathVariable("collaborator") String collaborator) {
		try {
			List<ActivityEntity> activities = activityRepository.findByCollaborator(collaborator);

			if (activities.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(activities, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
