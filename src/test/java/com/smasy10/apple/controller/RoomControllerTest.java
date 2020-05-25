package com.smasy10.apple.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.smasy10.apple.domain.Role;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RoomControllerTest {

    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    /*@Test
    public void createRoom() throws Exception {
        List<User> userList = new ArrayList<>();
        User user1 = new User("User1","ejun1118@naver.com","010-2222-3333","부산 남구", Role.USER);
        userList.add(user1);

        Room room = Room.builder()
                .title("축구할 사람 모여라")
                .area("부산")
                .date("2020-06-29")
                .sports("축구")
                .build();

        mockMvc.perform(post("/api/room/create")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(room)))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("id").exists())
                .andExpect(jsonPath("title").exists())
                .andExpect(jsonPath("area").exists())
                .andExpect(jsonPath("date").exists())
                .andExpect(jsonPath("sports").exists());

    }*/

}