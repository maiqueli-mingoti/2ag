package dev.uffs.doisag.model;

import jakarta.persistence.Entity;

import java.time.LocalDate;

@Entity
public class Prescriber extends Users {
    private String professionalCode;
    private String profession;

    public Prescriber() {
    }

    public Prescriber(Address address, LocalDate birthDate, String cpf, String email, Long id, String name, String password, String phone, String profession, String professionalCode) {
        super(address, birthDate, cpf, email, id, name, password, phone);
        this.profession = profession;
        this.professionalCode = professionalCode;
    }

    public String getProfessionalCode() {
        return professionalCode;
    }

    public void setProfessionalCode(String professionalCode) {
        this.professionalCode = professionalCode;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }
}
