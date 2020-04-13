-- insert 쿼리--
-- User Table
insert into user(name, phoneNo, address,room_id) value ('test1',010,'부산 남구',1);
insert into user(name, phoneNo, address,room_id) value ('test2',010,'부산 남구',1);
insert into user(name, phoneNo, address) value ('test3',010,'부산 남구');

-- Room Table
insert into room(title, area, sportsType) value ('축구인원모집','대연동','축구');

-- Place Table
insert into place(address, phoneNo) VALUES ('대연동','010-9999-9999');
insert into place(address, phoneNo) VALUES ('남천동','010-8888-8888');
insert into place(address, phoneNo) VALUES ('감만동','010-7777-7777');

-- Reservation Table
insert into reservation(reservation_room_id, reservation_place_id) value (1,1);

-- Reply Table
insert into reply(user_id,place_id, contents) VALUES (7,2,'안녕하세요')

-- delete 쿼리
-- delete from 테이블명 where id=아이디;