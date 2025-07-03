package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.SleepLogRepository;
import org.springframework.stereotype.Service;

@Service

public class SleepLogService {
    private final SleepLogRepository sleepLogRepository;

    public SleepLogService(SleepLogRepository sleepLogRepository) {
        this.sleepLogRepository = sleepLogRepository;
    }
}
