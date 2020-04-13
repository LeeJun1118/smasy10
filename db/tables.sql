create table place
(
    id      bigint auto_increment
        primary key,
    address varchar(500) not null,
    phoneNo varchar(500) null
);

create table room
(
    id         bigint auto_increment
        primary key,
    title      varchar(255) null,
    area       varchar(255) null,
    sportsType varchar(255) null
);

create table reservation
(
    id                   bigint auto_increment
        primary key,
    reservation_room_id  bigint null,
    reservation_place_id bigint null,
    constraint reservation_place_id
        foreign key (reservation_place_id) references place (id),
    constraint reservation_room_id
        foreign key (reservation_room_id) references room (id)
);

create table user
(
    id      bigint auto_increment
        primary key,
    name    varchar(255) null,
    phoneNo varchar(500) null,
    address varchar(500) null,
    room_id bigint       null,
    constraint room_id
        foreign key (room_id) references room (id)
);

create table reply
(
    id       bigint auto_increment
        primary key,
    user_id  bigint       null,
    place_id bigint       null,
    contents varchar(500) null,
    constraint place_id
        foreign key (place_id) references place (id),
    constraint user_id
        foreign key (user_id) references user (id)
);

