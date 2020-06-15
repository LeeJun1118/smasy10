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

export function searchRooms(text) { //방목록 검색
    const searchUrl = text ? `/api/rooms?text=${text}` : '/api/rooms';
    return request({
        url: API_BASE_URL + searchUrl,
        method: 'GET',
    });
}

export function currentRoom(id) { // 현재 방 정보
    return request({
        url: API_BASE_URL + "/rooms/enter/" + id,
        method: 'GET',
    });
}

export function getUserCounts(id) { //현재 방 유저 수
    return request({
        url: API_BASE_URL + "/rooms/enter/user/count/" + id,
        method: 'GET',
    });
}

export function getUserInfo(id) { //현재 방 유저 정보
    return request({
        url: API_BASE_URL + "/rooms/enter/users/info/" + id,
        method: 'GET',
    });
}

export function enterRoom(id) { // 방들어가기
    return request({
        url: API_BASE_URL + "/rooms/enter/" + id,
        method: 'POST',
    });
}

export function exitRoom(id) { //방 나가기
    return request({
        url: API_BASE_URL + "/room/exit/" + id,
        method: 'DELETE',
    });
}

export function registerComments(createCommentsRequest,id) {
    return request({
        url: API_BASE_URL + "/room/crate/reply/" + id,
        method: 'POST',
        body: JSON.stringify(createCommentsRequest)
    });
}

export function editComments(id) {
    return request({
        url: API_BASE_URL + "/room/edit/reply/" + id,
        method: 'PUT',
        // body: JSON.stringify()
    });
}
export function deleteComments(id) {
    return request({
        url: API_BASE_URL + "/reply/delete/" + id,
        method: 'DELETE',
        // body: JSON.stringify()
    });
}
export function CommentsList(id) {
    return request({
        url: API_BASE_URL + "/room/replies/" + id,
        method: 'GET',
        // body: JSON.stringify()
    });
}

