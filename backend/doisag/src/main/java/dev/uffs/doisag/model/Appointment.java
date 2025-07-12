package dev.uffs.doisag.model;

import jakarta.persistence.*;

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
    // relacionamento n:1, muitas consultas podem ser de um paciente
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id", nullable = false) // fk pro paciente
    private Patient patient;
    // relacionamento n:1, muitas consultas podem ser de um prescritor
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prescriber_id", nullable = false) // fk pro prescritor
    private Prescriber prescriber;

    public Appointment(String status, String therapeuticPlan, Prescriber prescriber, Patient patient, String modality, Long id, String evolution, String diagnosis, LocalDateTime dateTime, String clinicalObservation) {
        this.status = status;
        this.therapeuticPlan = therapeuticPlan;
        this.prescriber = prescriber;
        this.patient = patient;
        this.modality = modality;
        this.id = id;
        this.evolution = evolution;
        this.diagnosis = diagnosis;
        this.dateTime = dateTime;
        this.clinicalObservation = clinicalObservation;
    }

    // para o agendamento, torna os outros atributos opcionais;
    public Appointment(Patient patient, Prescriber prescriber, String modality, String status, Long id, LocalDateTime dateTime) {
        this.patient = patient;
        this.prescriber = prescriber;
        this.modality = modality;
        this.status = status;
        this.id = id;
        this.dateTime = dateTime;
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

    public Prescriber getPrescriber() {
        return prescriber;
    }

    public void setPrescriber(Prescriber prescriber) {
        this.prescriber = prescriber;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}


