package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.MentalStateExamRepository;
import org.springframework.stereotype.Service;

@Service

public class MentalStateExamService {
    private final MentalStateExamRepository mentalStateExamRepository;

    public MentalStateExamService(MentalStateExamRepository mentalStateExamRepository) {
        this.mentalStateExamRepository = mentalStateExamRepository;
    }
}
