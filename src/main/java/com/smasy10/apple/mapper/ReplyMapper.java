package com.smasy10.apple.mapper;

import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.dto.ReplyDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(
        componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface ReplyMapper {
    @Mapping(target = "user")
    ReplyDto toReplyDto(Reply reply);
}
