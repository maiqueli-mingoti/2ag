package dev.uffs.doisag.controller;

import dev.uffs.doisag.model.PittsburghScale;
import dev.uffs.doisag.service.PittsburghScaleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/escala-pittsburgh")
public class PittsburghScaleController {
    private final PittsburghScaleService pittsburghScaleService;

    public PittsburghScaleController(PittsburghScaleService pittsburghScaleService) {
        this.pittsburghScaleService = pittsburghScaleService;
    }

    // endpoint para CRIAR uma nova escala pittsburgh
    // POST /escala-pittsburgh
    @PostMapping
    public PittsburghScale create(@RequestBody PittsburghScale pittsburghScale) {
        return pittsburghScaleService.create(pittsburghScale);
    }

    // endpoint para LER todas as escalas pittsburgh
    // GET /escala-pittsburgh
    @GetMapping
    public List<PittsburghScale> getAll() {
        return pittsburghScaleService.getAll();
    }

    // endpoint para LER uma escala pittsburgh por ID
    // GET /escala-pittsburgh/{id}
    @GetMapping("/{id}")
    public ResponseEntity<PittsburghScale> getById(@PathVariable Long id) {
        return pittsburghScaleService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // endpoint para ATUALIZAR uma escala pittsburgh
    // PUT /escala-pittsburgh/{id}
    @PutMapping("/{id}")
    public ResponseEntity<PittsburghScale> update(@PathVariable Long id, @RequestBody PittsburghScale scaleDetails) {
        try {
            PittsburghScale updatedScale = pittsburghScaleService.update(id, scaleDetails);
            return ResponseEntity.ok(updatedScale);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // endpoint para DELETAR uma escala pittsburgh
    // DELETE /escala-pittsburgh/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            pittsburghScaleService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}