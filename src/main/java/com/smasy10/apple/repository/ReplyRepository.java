package com.smasy10.apple.repository;

import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReplyRepository extends JpaRepository<Reply,Long> {
}
