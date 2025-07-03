package dev.uffs.doisag.service;
import dev.uffs.doisag.repository.PrescriptionRepository;
import org.springframework.stereotype.Service;

@Service

public class PrescriptionService {
    private final PrescriptionRepository prescriptionRepository;

    public PrescriptionService(PrescriptionRepository prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }
}
