package com.javaereact.Projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaereact.Projeto.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
