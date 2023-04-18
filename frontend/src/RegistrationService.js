import axios from 'axios';

const REGISTRATION_API_BASE_URL = "http://localhost:8100/login";

class RegistrationService {

    getRegistration(){
        return axios.get(ACTIVITY_API_BASE_URL);
    }

    createRegistration(activity){
        return axios.post(ACTIVITY_API_BASE_URL, activity);
    }

    getRegistrationById(activityId){
        return axios.get(ACTIVITY_API_BASE_URL + '/' + activityId);
    }

    updateRegistration(activity, activityId){
        return axios.put(ACTIVITY_API_BASE_URL + '/' + activityId, activity);
    }

    deleteRegistration(activityId){
        return axios.delete(ACTIVITY_API_BASE_URL + '/' + activityId);
    }
}

export default RegistrationService()