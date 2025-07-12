package dev.uffs.doisag.service;

import dev.uffs.doisag.dto.AssignScaleDTO;
import dev.uffs.doisag.enums.AssignmentStatus;
import dev.uffs.doisag.model.AssignedScale;
import dev.uffs.doisag.model.Patient;
import dev.uffs.doisag.repository.AssignedScaleRepository;
import dev.uffs.doisag.repository.PatientRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
public class ScaleAssignmentService {

    private final AssignedScaleRepository assignedScaleRepository;
    private final PatientRepository patientRepository;

    public ScaleAssignmentService(AssignedScaleRepository assignedScaleRepository, PatientRepository patientRepository) {
        this.assignedScaleRepository = assignedScaleRepository;
        this.patientRepository = patientRepository;
    }

    // método para criar a tarefa de preencher uma escala
    public AssignedScale assignScaleToPatient(Long patientId, AssignScaleDTO assignScaleDTO) {
        // primeiro a gente acha o paciente no banco
        // se não achar, o orElseThrow lança uma exceção
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));

        // agora cria o objeto da tarefa
        AssignedScale newAssignment = new AssignedScale();
        newAssignment.setPatient(patient);
        newAssignment.setPrescriber(patient.getPrescriber()); // pega o prescritor do próprio paciente
        newAssignment.setScaleType(assignScaleDTO.scaleType());

        // usar o enum diretamente, sem o "AssignedScale." na frente
        newAssignment.setStatus(AssignmentStatus.PENDENTE); // começa como pendente

        newAssignment.setAssignedDate(LocalDate.now());

        // salva no banco e retorna o objeto que o banco devolveu
        return assignedScaleRepository.save(newAssignment);
    }
}