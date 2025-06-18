package dev.uffs.doisag.model;

import jakarta.persistence.Entity;

import java.time.LocalDate;

@Entity
public class Patient extends User {

    public Patient(String name, String cpf, String email, String password, LocalDate birthDate, String phone, Address address) {
        super(name, cpf, email, password, birthDate, phone, address);
    }

}
