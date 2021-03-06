package com.smasy10.apple.mapper;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.dto.RoomDto;
import org.springframework.stereotype.Component;

import javax.annotation.Generated;

@Generated(
        value = "org.mapstruct.ap.MappingProcessor",
        date = "2020-05-27T20:39:46+0900",
        comments = "version: 1.3.1.Final, compiler: javac, environment: Java 1.8.0_241 (Oracle Corporation)"
)

@Component
public class RoomMapperImpl implements RoomMapper {

    @Override
    public RoomDto toRoomDto(Room room) {
        if ( room == null ) {
            return null;
        }

        RoomDto roomDto = new RoomDto();

        roomDto.setId(room.getId());
        roomDto.setTitle( room.getTitle() );
        roomDto.setArea( room.getArea() );
        roomDto.setSports( room.getSports());
        roomDto.setDate( room.getDate() );
        roomDto.setHead(room.getHead());
        roomDto.setState(room.getState());

        return roomDto;
    }
}
