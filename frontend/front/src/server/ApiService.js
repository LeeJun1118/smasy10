import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/room/create";

class ApiService {
    addRoom(room){
        return axios.post(API_BASE_URL, room);
    }
}

export default new ApiService();
