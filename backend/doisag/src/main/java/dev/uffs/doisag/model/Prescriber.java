package dev.uffs.doisag.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

import java.time.LocalDate;

@Entity
public class Prescriber extends Users {
    private String profession;
    // garante que o código profissional seja único no banco de dados
    @Column(unique = true)
    private String professionalCode;

    @OneToMany(mappedBy = "prescriber")
    private List<Patient> patients = new ArrayList<>();

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
