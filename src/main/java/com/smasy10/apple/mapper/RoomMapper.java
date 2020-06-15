package com.smasy10.apple.mapper;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.dto.RoomDto;
import org.springframework.context.annotation.Configuration;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;;

import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;


@Configuration
@Mapper(
        componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface RoomMapper {

    @Mapping(target = "date")
    RoomDto toRoomDto(Room room);
}
