package com.smasy10.apple;

import com.smasy10.apple.domain.*;
import com.smasy10.apple.repository.PlaceRepository;
import com.smasy10.apple.repository.ReplyRepository;
import com.smasy10.apple.repository.ReservationRepository;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@SpringBootApplication
public class Application implements CommandLineRunner {
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final ReservationRepository reservationRepository;
    private final ReplyRepository replyRepository;
    private final PlaceRepository placeRepository;

    public Application(UserRepository userRepository, RoomRepository roomRepository, ReservationRepository reservationRepository, ReplyRepository replyRepository, PlaceRepository placeRepository) {
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
        this.reservationRepository = reservationRepository;
        this.replyRepository = replyRepository;
        this.placeRepository = placeRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception{
        userRepository.save(new User("User1","ejun1118@naver.com","010-2222-3333","부산 남구", Role.USER));
        userRepository.save(new User("User2","user2@naver.com","010-9999-3333","부산이다", Role.GUEST));

        Room room1 = new Room("축구할 사람 구함","부산","축구","2020-20-31");
        Room room2 = new Room("야구할 사람 구함","울산","야구","2020-10-11");

        roomRepository.save(room1);
        roomRepository.save(room2);

        userRepository.save(new User("User3","user3@naver.com","010-7777-3333","부산이다", Role.GUEST,room1));
        userRepository.save(new User("User4","user3@naver.com","010-3333-1111","울산이다", Role.GUEST,room2));



        /*Place place1 = new Place("경성대 축구장","부산 대연동","010-3243-1242");
        placeRepository.save(place1);

        Reply reply1 = new Reply("댓글1",user1,place1);
        replyRepository.save(reply1);

        Reservation reservation1 = new Reservation(room1,place1,user1);*/
    }
}
