//package com.projet.projetE4.Activity;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class ActivityService {
//    @Autowired
//    private ActivityRepository activityRepository;
//    public List<ActivityEntity> listAll() {
//        return activityRepository.findAll();
//    }
//
//    public void save(ActivityEntity std) {
//        activityRepository.save(std);
//    }
//
//    public ActivityEntity get(long id) {
//        return activityRepository.findById(id).get().orElseThrow(() -> new ResourceNotFoundException("Activity not exist with id :" + id));;
//    }
//
//    public void delete(long id) {
//        activityRepository.deleteById(id);
//    }
//}
