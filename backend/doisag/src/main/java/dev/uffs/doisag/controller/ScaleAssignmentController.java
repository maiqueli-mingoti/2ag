package dev.uffs.doisag.controller;

import dev.uffs.doisag.dto.AssignScaleDTO;
import dev.uffs.doisag.model.AssignedScale;
import dev.uffs.doisag.service.ScaleAssignmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/pacientes/{patientId}/escalas")
public class ScaleAssignmentController {

    private final ScaleAssignmentService scaleAssignmentService;

    public ScaleAssignmentController(ScaleAssignmentService scaleAssignmentService) {
        this.scaleAssignmentService = scaleAssignmentService;
    }

    // endpoint que o prescritor vai usar pra mandar uma escala pro paciente
    @PostMapping
    public ResponseEntity<AssignedScale> assignScale(@PathVariable Long patientId, @RequestBody AssignScaleDTO assignScaleDTO) {
        // guarda o objeto retornado pelo service
        AssignedScale newAssignment = scaleAssignmentService.assignScaleToPatient(patientId, assignScaleDTO);

        // essa parte aqui é pra construir a url do novo recurso que foi criado, copiei da net
        // exemplinho: /pacientes/1/escalas/5 (se o id da nova tarefa for 5)
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newAssignment.getId())
                .toUri();

        // retorna 201 created com a url no header e o objeto no corpo
        return ResponseEntity.created(location).body(newAssignment);
    }
}