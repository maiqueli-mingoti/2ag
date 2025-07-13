package dev.uffs.doisag.service;

import dev.uffs.doisag.dto.AssignScaleDTO;
import dev.uffs.doisag.enums.AssignmentStatus;
import dev.uffs.doisag.enums.ScaleType;
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

    // criar a tarefa de preencher uma escala
    public AssignedScale assignScaleToPatient(Long patientId, AssignScaleDTO assignScaleDTO) {
        // a gente acha o paciente no banco
        // se não achar o orElseThrow lança uma exceção
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));

        // agora cria o objeto da tarefa
        AssignedScale newAssignment = new AssignedScale();
        newAssignment.setPatient(patient);
        newAssignment.setPrescriber(patient.getPrescriber()); // pega o prescritor do próprio paciente
        newAssignment.setScaleType(assignScaleDTO.scaleType());

        // usamos o enum diretamente,
        newAssignment.setStatus(AssignmentStatus.PENDENTE); // começa como pendente

        newAssignment.setAssignedDate(LocalDate.now());

        // salva no banco e retorna o objeto que o banco devolveu
        return assignedScaleRepository.save(newAssignment);
    }
    // marcar uma tarefa de escala como concluida
    public void completeAssignedScale(Long patientId, ScaleType scaleType) {
        // busca a tarefa no banco usando o ultimo método q ta la no repo do scalessignment
        assignedScaleRepository.findFirstByPatientIdAndScaleTypeAndStatusOrderByAssignedDateDesc(
                patientId,
                scaleType,
                AssignmentStatus.PENDENTE
        ).ifPresent(assignment -> {
            // se a gente achar a tarefa pendente atualizamos ela
            assignment.setStatus(AssignmentStatus.CONCLUIDO);
            assignment.setCompletedDate(LocalDate.now());

            // salva a alteração no banco
            assignedScaleRepository.save(assignment);
        });
        // importante: se não achar nenhuma tarefa pendente (ifPresent), não faz nada
        // ai evitamos caso o paciente preencha uma escala que não foi designada pelo pescr
    }
}