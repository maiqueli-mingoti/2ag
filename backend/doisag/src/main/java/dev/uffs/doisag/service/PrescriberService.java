package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.PrescriberRepository;
import org.springframework.stereotype.Service;

@Service

public class PrescriberService {
    private final PrescriberRepository prescriberRepository;

    public PrescriberService(PrescriberRepository prescriberRepository) {
        this.prescriberRepository = prescriberRepository;
    }
}
