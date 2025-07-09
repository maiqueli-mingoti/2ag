package dev.uffs.doisag.service;

import dev.uffs.doisag.model.Patient;
import dev.uffs.doisag.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    // create patient
    public Patient create(Patient patient) {
        return patientRepository.save(patient);
    }

    // read all patients
    public List<Patient> getAll() {
        return patientRepository.findAll();
    }

    // read by id patient
    public Optional<Patient> getById(Long id) {
        return patientRepository.findById(id);
    }

    // update patient
    public Patient update(Long id, Patient patientDetails) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado com o id: " + id));

        patient.setName(patientDetails.getName());
        patient.setEmail(patientDetails.getEmail());
        patient.setPhone(patientDetails.getPhone());
        patient.setCpf(patientDetails.getCpf());
        patient.setBirthDate(patientDetails.getBirthDate());
        patient.setAddress(patientDetails.getAddress());
        patient.setPassword(patientDetails.getPassword());

        return patientRepository.save(patient);
    }

    // delete patient
    public void delete(Long id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado com o id: " + id));
        patientRepository.delete(patient);
    }
}