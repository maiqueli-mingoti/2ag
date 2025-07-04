package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.PittsburghScaleRepository;
import org.springframework.stereotype.Service;

@Service

public class PittsburghScaleService {
    private final PittsburghScaleRepository pittsburghScaleRepository;

    public PittsburghScaleService(PittsburghScaleRepository pittsburghScaleRepository) {
        this.pittsburghScaleRepository = pittsburghScaleRepository;
    }
}
