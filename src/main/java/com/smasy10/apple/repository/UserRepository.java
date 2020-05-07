package com.smasy10.apple.repository;

import com.smasy10.apple.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
