package com.smasy10.apple.domain;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class RoomTest {
    @Test
    public void testBuilder(){
        Room room = Room.builder().build();
        assertThat(room).isNotNull();
    }

    @Test
    public void testJavaBean(){
        String title = "제목" ;
        String area = "부산";
        String sports = "추구";
        String date = "2020-05-18";
        /*List<User> users = new ArrayList<>();
        users.add(new User("User1","ejun1118@naver.com","010-2222-3333","부산 남구", Role.USER));*/

        Room room = Room.builder().title(title).area(area).sports(sports).date(date).build();

        assertThat(room.getTitle()).isEqualTo(title);
        assertThat(room.getArea()).isEqualTo(area);
        assertThat(room.getSports()).isEqualTo(sports);
        assertThat(room.getDate()).isEqualTo(date);

    }
}