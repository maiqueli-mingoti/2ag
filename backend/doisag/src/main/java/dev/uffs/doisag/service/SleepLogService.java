package dev.uffs.doisag.service;

import dev.uffs.doisag.model.SleepLog;
import dev.uffs.doisag.repository.SleepLogRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SleepLogService {
    private final SleepLogRepository sleepLogRepository;

    public SleepLogService(SleepLogRepository sleepLogRepository) {
        this.sleepLogRepository = sleepLogRepository;
    }

    // CREATE
    public SleepLog create(SleepLog sleepLog) {
        return sleepLogRepository.save(sleepLog);
    }

    // READ ALL
    public List<SleepLog> getAll() {
        return sleepLogRepository.findAll();
    }

    // READ BY ID
    public Optional<SleepLog> getById(Long id) {
        return sleepLogRepository.findById(id);
    }

    // UPDATE
    public SleepLog update(Long id, SleepLog logDetails) {
        // busca o registro de sono ou lança uma exceção
        SleepLog existingLog = sleepLogRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("registro de sono não encontrado com o id: " + id));

        // atualiza os campos
        existingLog.setAssessmentDate(logDetails.getAssessmentDate());
        existingLog.setPatient(logDetails.getPatient());
        existingLog.setBedTime(logDetails.getBedTime());
        existingLog.setWakeUpTime(logDetails.getWakeUpTime());
        existingLog.setTimeInBed(logDetails.getTimeInBed());
        existingLog.setTimeToFallAsleep(logDetails.getTimeToFallAsleep());
        existingLog.setTimesWokenUp(logDetails.getTimesWokenUp());
        existingLog.setTotalTimeAwake(logDetails.getTotalTimeAwake());
        existingLog.setTotalSleepTime(logDetails.getTotalSleepTime());
        existingLog.setCommonDay(logDetails.getCommonDay());
        existingLog.setFatigue(logDetails.getFatigue());
        existingLog.setStress(logDetails.getStress());
        existingLog.setDaytimeSleepiness(logDetails.getDaytimeSleepiness());
        existingLog.setInattention(logDetails.getInattention());
        existingLog.setIrritability(logDetails.getIrritability());
        existingLog.setPain(logDetails.getPain());
        existingLog.setHealthPerception(logDetails.getHealthPerception());
        existingLog.setPhysicalActivityTime(logDetails.getPhysicalActivityTime());
        existingLog.setTimeAwayFromHome(logDetails.getTimeAwayFromHome());
        existingLog.setUsedSleepMedication(logDetails.getUsedSleepMedication());
        existingLog.setAlcoholConsumption(logDetails.getAlcoholConsumption());
        existingLog.setNapsTime(logDetails.getNapsTime());
        existingLog.setCoffeeConsumption(logDetails.getCoffeeConsumption());
        existingLog.setNighttimeSmoking(logDetails.getNighttimeSmoking());

        return sleepLogRepository.save(existingLog);
    }

    // DELETE
    public void delete(Long id) {
        // verifica se o registro de sono existe antes de deletar
        if (!sleepLogRepository.existsById(id)) {
            throw new EntityNotFoundException("registro de sono não encontrado com o id: " + id);
        }
        sleepLogRepository.deleteById(id);
    }
}