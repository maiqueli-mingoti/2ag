package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.HamiltonScaleRepository;
import org.springframework.stereotype.Service;

@Service

public class HamiltonScaleService {
    private final HamiltonScaleRepository hamiltonScaleRepository;

    public HamiltonScaleService(HamiltonScaleRepository hamiltonScaleRepository) {
        this.hamiltonScaleRepository = hamiltonScaleRepository;
    }
}
