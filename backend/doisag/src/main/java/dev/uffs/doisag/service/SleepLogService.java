package dev.uffs.doisag.service;

import dev.uffs.doisag.model.SleepLog;
import dev.uffs.doisag.repository.SleepLogRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import dev.uffs.doisag.enums.ScaleType;

import java.time.Duration;
import java.util.List;
import java.util.Optional;

@Service
public class SleepLogService {
    private final SleepLogRepository sleepLogRepository;
    // aqui eh a injeçao do service q controla o status
    private final ScaleAssignmentService scaleAssignmentService;

    public SleepLogService(SleepLogRepository sleepLogRepository, ScaleAssignmentService scaleAssignmentService) {
        this.sleepLogRepository = sleepLogRepository;
        this.scaleAssignmentService = scaleAssignmentService;
    }

    // CREATE
    public SleepLog create(SleepLog sleepLog) {

        // tempo na cama em min
        if (sleepLog.getBedTime() != null && sleepLog.getWakeUpTime() != null) {
            float timeInBedMinutes = Duration.between(sleepLog.getBedTime(), sleepLog.getWakeUpTime()).toMinutes();
            sleepLog.setTimeInBed(timeInBedMinutes);
        }
        // total acordado no horário do sono em min, tempo antes de dormir + tempo acordado
        int totalTimeAwake = sleepLog.getTimeToFallAsleep() + sleepLog.getTotalTimeAwakeDuringNight();
        sleepLog.setTotalTimeAwake(totalTimeAwake);

        // tempo total de sono em minutos, tempo na cama - total acordado
        float totalSleepTime = sleepLog.getTimeInBed() - totalTimeAwake;
        sleepLog.setTotalSleepTime(totalSleepTime);

        // salva no bancs
        SleepLog savedLog = sleepLogRepository.save(sleepLog);

        // depois de salvar, avisa o sistema pra dar baixa na tarefa
        if (savedLog.getPatient() != null) {
            scaleAssignmentService.completeAssignedScale(
                    savedLog.getPatient().getId(),
                    ScaleType.REGISTRO_SONO
            );
        }
        // retorna a scala salva
        return savedLog;
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