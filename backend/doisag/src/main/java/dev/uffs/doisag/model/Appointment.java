package dev.uffs.doisag.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dateTime;
    private String modality;
    private String status;
    private String diagnosis;
    private String clinicalObservation;
    private String therapeuticPlan;
    private String evolution;

    public Appointment(Long id, LocalDateTime dateTime, String modality, String status, String diagnosis, String clinicalObservation, String therapeuticPlan, String evolution) {
        this.id = id;
        this.dateTime = dateTime;
        this.modality = modality;
        this.status = status;
        this.diagnosis = diagnosis;
        this.clinicalObservation = clinicalObservation;
        this.therapeuticPlan = therapeuticPlan;
        this.evolution = evolution;
    }
    // para o agendamento, torna os outros atributos opcionais;
    public Appointment(String status, String modality, LocalDateTime dateTime, Long id) {
        this.status = status;
        this.modality = modality;
        this.dateTime = dateTime;
        this.id = id;
    }

    public Appointment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getModality() {
        return modality;
    }

    public void setModality(String modality) {
        this.modality = modality;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getClinicalObservation() {
        return clinicalObservation;
    }

    public void setClinicalObservation(String clinicalObservation) {
        this.clinicalObservation = clinicalObservation;
    }

    public String getTherapeuticPlan() {
        return therapeuticPlan;
    }

    public void setTherapeuticPlan(String therapeuticPlan) {
        this.therapeuticPlan = therapeuticPlan;
    }

    public String getEvolution() {
        return evolution;
    }

    public void setEvolution(String evolution) {
        this.evolution = evolution;
    }
}

