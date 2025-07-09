package dev.uffs.doisag.service;

import dev.uffs.doisag.model.Prescription;
import dev.uffs.doisag.repository.PrescriptionRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {
    private final PrescriptionRepository prescriptionRepository;

    public PrescriptionService(PrescriptionRepository prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }

    // CREATE
    public Prescription create(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    // READ ALL
    public List<Prescription> getAll() {
        return prescriptionRepository.findAll();
    }

    // READ BY ID
    public Optional<Prescription> getById(Long id) {
        return prescriptionRepository.findById(id);
    }

    // UPDATE
    public Prescription update(Long id, Prescription prescriptionDetails) {
        // busca a prescrição ou lança uma exceção
        Prescription prescription = prescriptionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("prescrição não encontrada com o id: " + id));

        // atualiza os campos do objeto com os novos detalhes
        prescription.setProductDescription(prescriptionDetails.getProductDescription());
        prescription.setPosology(prescriptionDetails.getPosology());
        prescription.setBrand(prescriptionDetails.getBrand());
        prescription.setConcentration(prescriptionDetails.getConcentration());
        prescription.setSpectrum(prescriptionDetails.getSpectrum());
        prescription.setObservation(prescriptionDetails.getObservation());

        return prescriptionRepository.save(prescription);
    }

    // DELETE
    public void delete(Long id) {
        // verifica se a prescrição existe antes de deletar
        if (!prescriptionRepository.existsById(id)) {
            throw new EntityNotFoundException("prescrição não encontrada com o id: " + id);
        }
        prescriptionRepository.deleteById(id);
    }
}