package dev.uffs.doisag.controller;

import dev.uffs.doisag.service.PrescriberService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Prescritor")

public class PrescribersController {
    private final PrescriberService prescriberService;

    public PrescribersController(PrescriberService prescriberService) {
        this.prescriberService = prescriberService;
    }
}
