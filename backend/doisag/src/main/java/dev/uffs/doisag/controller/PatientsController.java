package dev.uffs.doisag.controller;

import dev.uffs.doisag.model.Patient;
import dev.uffs.doisag.service.PatientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/paciente")

public class PatientsController {
    private final PatientService patientService;

    public PatientsController(PatientService patientService) {
        this.patientService = patientService;
    }

    // create patient
    @PostMapping
    public Patient create(@RequestBody Patient patient){
        return patientService.create(patient);
    }

    // read all patient
    @GetMapping
    public List<Patient> getAll(){
        return patientService.getAll();
    }

    // read by id patient
    @GetMapping("/{id}")
    public ResponseEntity<Patient> getById(@PathVariable Long id){
        return patientService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // update patient
    @PutMapping("/{id}")
    public ResponseEntity<Patient> update(@PathVariable Long id, @RequestBody Patient patientDetails) {
        try {
            Patient updatedPatient = patientService.update(id, patientDetails);
            return ResponseEntity.ok(updatedPatient);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    // delete patient
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            patientService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}