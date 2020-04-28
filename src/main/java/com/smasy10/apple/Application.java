package com.smasy10.apple;

import com.smasy10.apple.domain.place.Place;
import com.smasy10.apple.domain.place.PlaceRepository;
import com.smasy10.apple.domain.reply.Reply;
import com.smasy10.apple.domain.reply.ReplyRepository;
import com.smasy10.apple.domain.reserve.ReservationRepository;
import com.smasy10.apple.domain.room.RoomRepository;
import com.smasy10.apple.domain.user.User;
import com.smasy10.apple.domain.user.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    private UserRepository userRepository;
    private RoomRepository roomRepository;
    private ReservationRepository reservationRepository;
    private ReplyRepository replyRepository;
    private PlaceRepository placeRepository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    /*@Override
    public void run(String... args) throws Exception{
        userRepository.save(new User("이준","ejun1118@naver.com","010-2222-3333","부산 남구","ROLE_USER"));
    }*/
}
