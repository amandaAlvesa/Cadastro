package com.javaereact.Projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javaereact.Projeto.exception.UserNotFoundException;
import com.javaereact.Projeto.model.User;
import com.javaereact.Projeto.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

	@Autowired
	private UserRepository repository;
	
	@PostMapping("/user")
	User newUser(@RequestBody User newUser) {
		return repository.save(newUser);
	}
	
	@GetMapping("/users")
	List<User> getAllUsers() {
		return repository.findAll();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id) {
		return repository.findById(id).orElseThrow(()->new UserNotFoundException(id));
	} 

	@PutMapping("/user/{id}")
	User upadateUser(@RequestBody User newUser, @PathVariable Long id) {
		return repository.findById(id)
				.map(user -> {
					user.setName(newUser.getName());
					user.setEmail(newUser.getEmail());
					user.setUserName(newUser.getUserName());
					return repository.save(user);
				})
				.orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id) {
		if(!repository.existsById(id)) {
			throw new UserNotFoundException(id); 
		}else {
		repository.deleteById(id);
		return "USUARIO COM O ID: " + id + " FOI DELETADO COM SUCESSO";
		}
	}
}
