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
    // numero unico oficial do conselho daprofissão
    @Column(unique = true)
    private String professionalRegistry;
    // codigo unico de vinculo para a api
    @Column(unique = true)
    private String professionalCode;

    @OneToMany(mappedBy = "prescriber")
    private List<Patient> patients = new ArrayList<>();

    public Prescriber() {
    }

    public Prescriber(Address address, LocalDate birthDate, String cpf, String email, Long id, String name, String password, String phone, List<Patient> patients, String profession, String professionalCode, String professionalRegistry) {
        super(address, birthDate, cpf, email, id, name, password, phone);
        this.patients = patients;
        this.profession = profession;
        this.professionalCode = professionalCode;
        this.professionalRegistry = professionalRegistry;
    }

    public Prescriber(List<Patient> patients, String profession, String professionalCode, String professionalRegistry) {
        this.patients = patients;
        this.profession = profession;
        this.professionalCode = professionalCode;
        this.professionalRegistry = professionalRegistry;
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

    public List<Patient> getPatients() {
        return patients;
    }

    public void setPatients(List<Patient> patients) {
        this.patients = patients;
    }

    public String getProfessionalRegistry() {
        return professionalRegistry;
    }

    public void setProfessionalRegistry(String professionalRegistry) {
        this.professionalRegistry = professionalRegistry;
    }
}
