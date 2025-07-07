package dev.uffs.doisag.model;

import jakarta.persistence.Entity;

import java.time.LocalDate;

@Entity
public class Patient extends Users {

    public Patient() {
    }

    public Patient(Address address, LocalDate birthDate, String cpf, String email, Long id, String name, String password, String phone) {
        super(address, birthDate, cpf, email, id, name, password, phone);
    }
}
