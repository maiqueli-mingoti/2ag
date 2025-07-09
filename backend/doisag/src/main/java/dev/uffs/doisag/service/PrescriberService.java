package dev.uffs.doisag.service;

import dev.uffs.doisag.model.Prescriber;
import dev.uffs.doisag.repository.PrescriberRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PrescriberService {
    private final PrescriberRepository prescriberRepository;

    public PrescriberService(PrescriberRepository prescriberRepository) {
        this.prescriberRepository = prescriberRepository;
    }
    // create prescriber
    public Prescriber create(Prescriber prescriber) {
        return prescriberRepository.save(prescriber);
    }

    // read all prescriber
    public List<Prescriber> getAll() {
        return prescriberRepository.findAll();
    }

    // read by id prescriber
    public Optional<Prescriber> getById(Long id) {
        return prescriberRepository.findById(id);
    }

    // update prescriber
    public Prescriber update(Long id, Prescriber prescriberDetails) {
        Prescriber prescriber = prescriberRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Prescritor não encontrado com o id: " + id));

        prescriber.setName(prescriberDetails.getName());
        prescriber.setEmail(prescriberDetails.getEmail());
        prescriber.setPhone(prescriberDetails.getPhone());
        prescriber.setCpf(prescriberDetails.getCpf());
        prescriber.setBirthDate(prescriberDetails.getBirthDate());
        prescriber.setAddress(prescriberDetails.getAddress());
        prescriber.setProfession(prescriberDetails.getProfession());
        prescriber.setProfessionalCode(prescriberDetails.getProfessionalCode());

        return prescriberRepository.save(prescriber);
    }

    // delete prescriber
    public void delete(Long id) {
        if (!prescriberRepository.existsById(id)) {
            throw new EntityNotFoundException("Prescritor não encontrado com o id: " + id);
        }
        prescriberRepository.deleteById(id);
    }
}