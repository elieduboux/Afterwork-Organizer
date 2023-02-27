package com.projet.projetE4;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestService {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public boolean saveActivity(ActivityEntity activity) {
		boolean status = false;
		try {
			sessionFactory.getCurrentSession().save(activity);
			status = true;
		} catch(Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public List<ActivityEntity> getActivities() {
		Session currentSession = sessionFactory.getCurrentSession();  
		 Query<ActivityEntity> query= currentSession.createQuery("from activities", ActivityEntity.class);  
		 List<ActivityEntity> list = query.getResultList();
		 return list;
	}
	
	public boolean deleteActivity(ActivityEntity activity) {
		boolean status = false;
		try {
			sessionFactory.getCurrentSession().delete(activity);
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public List<ActivityEntity> findById(ActivityEntity activity) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<ActivityEntity> query = currentSession.createQuery("from activities where activity_id=:activity_id", ActivityEntity.class); 
		query.setParameter("activity_id", activity.getId());  
		List<ActivityEntity> list = query.getResultList();
		
		return list;
	}
	
	public boolean updateActivity(ActivityEntity activity) {
		boolean status=false;  
        try {  
            sessionFactory.getCurrentSession().update(activity);  
            status=true;  
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
        return status;  
	}
}
