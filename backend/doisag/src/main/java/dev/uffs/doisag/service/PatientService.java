package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.PatientRepository;
import org.springframework.stereotype.Service;

@Service

public class PatientService {
    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }
}
