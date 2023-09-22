package com.javaereact.Projeto.exception;

public class UserNotFoundException extends RuntimeException{

	public UserNotFoundException(Long id) {
		super("Não encontrado nenhum cadastro com este id: " + id);
	}
}
