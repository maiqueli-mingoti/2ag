package dev.uffs.doisag.service;

import dev.uffs.doisag.model.TEALog;
import dev.uffs.doisag.repository.TEALogRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TEALogService {
    private final TEALogRepository teaLogRepository;

    public TEALogService(TEALogRepository teaLogRepository) {
        this.teaLogRepository = teaLogRepository;
    }

    // método privado para calcular o score total
    private int calculateTotalScore(TEALog log) {
        return log.getFreqAggressiveness() +
                log.getFreqAgitation() +
                log.getFreqSleepIssues() +
                log.getFreqSocialInteraction() +
                log.getFreqStereotypy() +
                log.getFreqAppetiteIssues();
    }

    // CREATE
    public TEALog create(TEALog teaLog) {
        int totalScore = calculateTotalScore(teaLog);
        teaLog.setTeaScore(totalScore);
        return teaLogRepository.save(teaLog);
    }

    // READ ALL
    public List<TEALog> getAll() {
        return teaLogRepository.findAll();
    }

    // READ BY ID
    public Optional<TEALog> getById(Long id) {
        return teaLogRepository.findById(id);
    }

    // UPDATE
    public TEALog update(Long id, TEALog logDetails) {
        TEALog existingLog = teaLogRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("registro tea não encontrado com o id: " + id));

        // atualiza os campos
        existingLog.setAssessmentDate(logDetails.getAssessmentDate());
        existingLog.setPatient(logDetails.getPatient());
        existingLog.setFreqAggressiveness(logDetails.getFreqAggressiveness());
        existingLog.setFreqAgitation(logDetails.getFreqAgitation());
        existingLog.setFreqSleepIssues(logDetails.getFreqSleepIssues());
        existingLog.setFreqSocialInteraction(logDetails.getFreqSocialInteraction());
        existingLog.setFreqStereotypy(logDetails.getFreqStereotypy());
        existingLog.setFreqAppetiteIssues(logDetails.getFreqAppetiteIssues());
        existingLog.setObservation(logDetails.getObservation());

        // recalcula o score
        int totalScore = calculateTotalScore(existingLog);
        existingLog.setTeaScore(totalScore);

        return teaLogRepository.save(existingLog);
    }

    // DELETE
    public void delete(Long id) {
        if (!teaLogRepository.existsById(id)) {
            throw new EntityNotFoundException("registro tea não encontrado com o id: " + id);
        }
        teaLogRepository.deleteById(id);
    }
}