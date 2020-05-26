import axios from 'axios';

const CREATE_ROOM_API_BASE_URL = "http://localhost:8080/api/room/create";

class ApiService {
    addRoom(room){
        return axios.post(CREATE_ROOM_API_BASE_URL, room);
    }
}

export default new ApiService();
