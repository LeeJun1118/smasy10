package com.smasy10.apple;

import com.smasy10.apple.domain.BaseTimeEntity;
import com.smasy10.apple.domain.place.PlaceRepository;
import com.smasy10.apple.domain.reply.ReplyRepository;
import com.smasy10.apple.domain.reserve.ReservationRepository;
import com.smasy10.apple.domain.room.Room;
import com.smasy10.apple.domain.room.RoomRepository;
import com.smasy10.apple.domain.user.Role;
import com.smasy10.apple.domain.user.User;
import com.smasy10.apple.domain.user.UserRepository;
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

        //방없는 User
        User user1 = new User("User1","ejun1118@naver.com","010-2222-3333","부산 남구", Role.USER);

        Room room1 = new Room("부산","축구","축구할 사람 구함");
        Room room2 = new Room("울산","야구","야구 하자");
        Room room3 = new Room("대구","농구","농구가 좋아");
        Room room4 = new Room("포항","축구","축구 사랑");
        Room room5 = new Room("경남","배구","배구 굿");


        roomRepository.save(room1);
        roomRepository.save(room2);
        roomRepository.save(room3);
        roomRepository.save(room4);
        roomRepository.save(room5);

        userRepository.save(new User("User2","test@gmail.com","010-1111-2222","부산",Role.USER,room1));
    }
}
