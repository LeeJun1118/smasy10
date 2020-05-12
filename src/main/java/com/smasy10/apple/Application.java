package com.smasy10.apple;

import com.smasy10.apple.repository.PlaceRepository;
import com.smasy10.apple.repository.ReplyRepository;
import com.smasy10.apple.repository.ReservationRepository;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.domain.Role;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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

        User user1 = new User("User1","ejun1118@naver.com","010-2222-3333","부산 남구", Role.USER);
        userRepository.save(user1);

        Room room1 = new Room("부산","축구","축구할 사람 구함",user1,"2020년 06월 20일");
        roomRepository.save(room1);

    }
}
