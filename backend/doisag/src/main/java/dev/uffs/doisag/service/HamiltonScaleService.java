package dev.uffs.doisag.service;

import dev.uffs.doisag.model.HamiltonScale;
import dev.uffs.doisag.repository.HamiltonScaleRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HamiltonScaleService {
    private final HamiltonScaleRepository hamiltonScaleRepository;

    public HamiltonScaleService(HamiltonScaleRepository hamiltonScaleRepository) {
        this.hamiltonScaleRepository = hamiltonScaleRepository;
    }

    // método privado para calcular a pontuação total
    private int calculateTotalScore(HamiltonScale scale) {
        return scale.getAnxiousMood() +
                scale.getTension() +
                scale.getFears() +
                scale.getInsomnia() +
                scale.getCognition() +
                scale.getDepressedMood() +
                scale.getSomaticMotor() +
                scale.getSomaticSensory() +
                scale.getCardiovascularSymptoms() +
                scale.getRespiratorySymptoms() +
                scale.getGastrointestinalSymptoms() +
                scale.getGenitourinarySymptoms() +
                scale.getAutonomicSymptoms();
    }

    // CREATE
    public HamiltonScale create(HamiltonScale hamiltonScale) {
        // calcula e define a pontuação total antes de salvar
        int totalScore = calculateTotalScore(hamiltonScale);
        hamiltonScale.setHamScore(totalScore);
        return hamiltonScaleRepository.save(hamiltonScale);
    }

    // READ ALL
    public List<HamiltonScale> getAll() {
        return hamiltonScaleRepository.findAll();
    }

    // READ BY ID
    public Optional<HamiltonScale> getById(Long id) {
        return hamiltonScaleRepository.findById(id);
    }

    // UPDATE
    public HamiltonScale update(Long id, HamiltonScale scaleDetails) {
        // busca a escala ou lança uma exceção
        HamiltonScale existingScale = hamiltonScaleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("escala hamilton não encontrada com o id: " + id));

        // atualiza os campos do objeto com os novos detalhes
        existingScale.setAssessmentDate(scaleDetails.getAssessmentDate());
        existingScale.setPatient(scaleDetails.getPatient());
        existingScale.setAnxiousMood(scaleDetails.getAnxiousMood());
        existingScale.setTension(scaleDetails.getTension());
        existingScale.setFears(scaleDetails.getFears());
        existingScale.setInsomnia(scaleDetails.getInsomnia());
        existingScale.setCognition(scaleDetails.getCognition());
        existingScale.setDepressedMood(scaleDetails.getDepressedMood());
        existingScale.setSomaticMotor(scaleDetails.getSomaticMotor());
        existingScale.setSomaticSensory(scaleDetails.getSomaticSensory());
        existingScale.setCardiovascularSymptoms(scaleDetails.getCardiovascularSymptoms());
        existingScale.setRespiratorySymptoms(scaleDetails.getRespiratorySymptoms());
        existingScale.setGastrointestinalSymptoms(scaleDetails.getGastrointestinalSymptoms());
        existingScale.setGenitourinarySymptoms(scaleDetails.getGenitourinarySymptoms());
        existingScale.setAutonomicSymptoms(scaleDetails.getAutonomicSymptoms());

        // recalcula e define a pontuação total
        int totalScore = calculateTotalScore(existingScale);
        existingScale.setHamScore(totalScore);

        return hamiltonScaleRepository.save(existingScale);
    }

    // DELETE
    public void delete(Long id) {
        // verifica se a escala existe antes de deletar
        if (!hamiltonScaleRepository.existsById(id)) {
            throw new EntityNotFoundException("escala hamilton não encontrada com o id: " + id);
        }
        hamiltonScaleRepository.deleteById(id);
    }
}