package dev.uffs.doisag.controller;

import dev.uffs.doisag.model.FollowUp;
import dev.uffs.doisag.service.FollowUpService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/acompanhamento")
public class FollowUpController {
    private final FollowUpService followUpService;

    public FollowUpController(FollowUpService followUpService) {
        this.followUpService = followUpService;
    }

    // endpoint para CRIAR um novo acompanhamento
    // POST /acompanhamento
    @PostMapping
    public FollowUp create(@RequestBody FollowUp followUp) {
        return followUpService.create(followUp);
    }

    // endpoint para LER todos os followups
    // GET /acompanhamento
    @GetMapping
    public List<FollowUp> getAll() {
        return followUpService.getAll();
    }

    // endpoint para LER um followup por ID
    // GET /acompanhamento/{id}
    @GetMapping("/{id}")
    public ResponseEntity<FollowUp> getById(@PathVariable Long id) {
        return followUpService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // endpoint para ATUALIZAR um followup
    // PUT /acompanhamento/{id}
    @PutMapping("/{id}")
    public ResponseEntity<FollowUp> update(@PathVariable Long id, @RequestBody FollowUp followUpDetails) {
        try {
            FollowUp updatedFollowUp = followUpService.update(id, followUpDetails);
            return ResponseEntity.ok(updatedFollowUp);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // endpoint para DELETAR um followup
    // DELETE /acompanhamento/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            followUpService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}