package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.AnamnesisRepository;
import org.springframework.stereotype.Service;

@Service

public class AnamnesisService {
    private final AnamnesisRepository anamnesisRepository;

    public AnamnesisService(AnamnesisRepository anamnesisRepository) {
        this.anamnesisRepository = anamnesisRepository;
    }
}
