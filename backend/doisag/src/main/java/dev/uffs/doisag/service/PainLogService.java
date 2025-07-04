package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.PainLogRepository;
import org.springframework.stereotype.Service;

@Service

public class PainLogService {
    private final PainLogRepository painLogRepository;

    public PainLogService(PainLogRepository painLogRepository) {
        this.painLogRepository = painLogRepository;
    }
}
