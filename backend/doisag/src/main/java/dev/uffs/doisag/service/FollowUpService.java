package dev.uffs.doisag.service;

import dev.uffs.doisag.repository.FollowUpRepository;
import org.springframework.stereotype.Service;

@Service

public class FollowUpService {
    private final FollowUpRepository followUpRepository;

    public FollowUpService(FollowUpRepository followUpRepository) {
        this.followUpRepository = followUpRepository;
    }
}
