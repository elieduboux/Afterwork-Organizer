import axios from 'axios';

const ACTIVITY_API_BASE_URL = "http://localhost:8100/activities";

class ActivityService {

    getActivities(){
        return axios.get(ACTIVITY_API_BASE_URL);
    }

    createActivities(activity){
        return axios.post(ACTIVITY_API_BASE_URL, activity);
    }

    getActivitiesById(activityId){
        return axios.get(ACTIVITY_API_BASE_URL + '/' + activityId);
    }

    updateActivities(activity, activityId){
        return axios.put(ACTIVITY_API_BASE_URL + '/' + activityId, activity);
    }

    deleteActivities(activityId){
        return axios.delete(ACTIVITY_API_BASE_URL + '/' + activityId);
    }
}

export default ActivityService()