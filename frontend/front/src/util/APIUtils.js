import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            // console.log(json);
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function createRoom(createRoomRequest) {
    return request({
        url: API_BASE_URL + "/room/create",
        method: 'POST',
        body: JSON.stringify(createRoomRequest)
    });
}

export function searchRooms(text) {
    const searchUrl = text ? `/rooms?text=${text}` : '/api/rooms';
    return request({
        url: API_BASE_URL + searchUrl,
        method: 'GET',
        // body: JSON.stringify(text)
    });
}

export function currentRoom(currentRoomRequest) {
    return request({
        url: API_BASE_URL + "/rooms/enter" + currentRoomRequest.id,
        method: 'POST',
        body: JSON.stringify(currentRoom)
    });
}
