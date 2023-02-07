package com.projet.projetE4;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class RestService {

	private ActivityRepository activityRepository;
	
	public RestService(ActivityRepository activityRepository) {
		this.activityRepository = activityRepository;
	}
	
	public String getActivityStats(Long id) {
		ActivityEntity activity = activityRepository.findById(id);
		String result="{ID : " + activity.getId().toString()+",Type Activite: " + activity.getType() + ",Nom activite : " + activity.getName()
			+ ",Organisateur : " + activity.getOrganisator() + ",Collaborateur : " + activity.getCollaborator();
		
		return result;
	}
}
