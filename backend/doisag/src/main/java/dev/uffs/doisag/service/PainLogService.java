package dev.uffs.doisag.service;

import dev.uffs.doisag.model.PainLog;
import dev.uffs.doisag.repository.PainLogRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PainLogService {
    private final PainLogRepository painLogRepository;

    public PainLogService(PainLogRepository painLogRepository) {
        this.painLogRepository = painLogRepository;
    }

    // CREATE
    public PainLog create(PainLog painLog) {
        return painLogRepository.save(painLog);
    }

    // READ ALL
    public List<PainLog> getAll() {
        return painLogRepository.findAll();
    }

    // READ BY ID
    public Optional<PainLog> getById(Long id) {
        return painLogRepository.findById(id);
    }

    // UPDATE
    public PainLog update(Long id, PainLog logDetails) {
        // busca o diário de dor ou lança uma exceção
        PainLog existingLog = painLogRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("diário de dor não encontrado com o id: " + id));

        // atualiza os campos
        existingLog.setAssessmentDate(logDetails.getAssessmentDate());
        existingLog.setPatient(logDetails.getPatient());
        existingLog.setBasicActivityInterference(logDetails.getBasicActivityInterference());
        existingLog.setSocialActivityInterference(logDetails.getSocialActivityInterference());
        existingLog.setSleepInterference(logDetails.getSleepInterference());
        existingLog.setProductivityInterference(logDetails.getProductivityInterference());
        existingLog.setExtraMedication(logDetails.getExtraMedication());
        existingLog.setObservation(logDetails.getObservation());

        return painLogRepository.save(existingLog);
    }

    // DELETE
    public void delete(Long id) {
        // verifica se o diário de dor existe antes de deletar
        if (!painLogRepository.existsById(id)) {
            throw new EntityNotFoundException("diário de dor não encontrado com o id: " + id);
        }
        painLogRepository.deleteById(id);
    }
}