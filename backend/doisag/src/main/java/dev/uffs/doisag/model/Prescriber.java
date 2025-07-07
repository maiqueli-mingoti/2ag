package dev.uffs.doisag.model;

import jakarta.persistence.Entity;
import lombok.Getter;

import java.time.LocalDate;

@Entity
public class Prescriber extends User {
    private String professionalCode;
    private String profession;

    public Prescriber(String name, String cpf, String email, String password, LocalDate birthDate, String phone, Address address, String professionalCode, String profession) {
        super(name, cpf, email, password, birthDate, phone, address);
        this.professionalCode = professionalCode;
        this.profession = profession;
    }

    public Prescriber() {
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
