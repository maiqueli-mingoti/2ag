package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.TEAScaleRepository;
import org.springframework.stereotype.Service;

@Service

public class TEAScaleService {
    private final TEAScaleRepository teaScaleRepository;

    public TEAScaleService(TEAScaleRepository teaScaleRepository) {
        this.teaScaleRepository = teaScaleRepository;
    }
}
