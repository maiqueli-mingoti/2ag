package dev.uffs.doisag.infra;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.ValidationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

// classe para tratar os erros da aplicação de forma centralizada
@RestControllerAdvice
public class ErrorHandler {

    // trata erros de entidade não encontrada (404)
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity handleNotFound() {
        return ResponseEntity.notFound().build();
    }

    // trata os nossos erros de validação de negócio (400)
    @ExceptionHandler(ValidationException.class)
    public ResponseEntity handleBusinessValidation(ValidationException ex) {
        // retorna um 400 bad request com a mensagem da exceção
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
    // trata erros de argumento inválido (400)
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity handleIllegalArgument(IllegalArgumentException ex) {
        // retorna um 400 bad request com a mensagem da exceção pro giancarlo ficar happy
        // e o front sabe exatamente qual parâmetro mandou errado
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}