package dev.uffs.doisag.controller;

import dev.uffs.doisag.model.PainLog;
import dev.uffs.doisag.service.PainLogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/registro-dor")
public class PainLogController {
    private final PainLogService painLogService;

    public PainLogController(PainLogService painLogService) {
        this.painLogService = painLogService;
    }

    // endpoint para CRIAR um novo registro de dor
    // POST /registro-dor
    @PostMapping
    public PainLog create(@RequestBody PainLog painLog) {
        return painLogService.create(painLog);
    }

    // endpoint para LER todos os registros de dor
    // GET /registro-dor
    @GetMapping
    public List<PainLog> getAll() {
        return painLogService.getAll();
    }

    // endpoint para LER um registro de dor por ID
    // GET /registro-dor/{id}
    @GetMapping("/{id}")
    public ResponseEntity<PainLog> getById(@PathVariable Long id) {
        return painLogService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // endpoint para ATUALIZAR um registro de dor
    // PUT /registro-dor/{id}
    @PutMapping("/{id}")
    public ResponseEntity<PainLog> update(@PathVariable Long id, @RequestBody PainLog logDetails) {
        try {
            PainLog updatedLog = painLogService.update(id, logDetails);
            return ResponseEntity.ok(updatedLog);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // endpoint para DELETAR um registro de dor
    // DELETE /registro-dor/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            painLogService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}