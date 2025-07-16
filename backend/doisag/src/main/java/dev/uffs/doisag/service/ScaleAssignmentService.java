package dev.uffs.doisag.service;

import dev.uffs.doisag.dto.AssignScaleDTO;
import dev.uffs.doisag.enums.AssignmentStatus;
import dev.uffs.doisag.enums.ScaleType;
import dev.uffs.doisag.model.AssignedScale;
import dev.uffs.doisag.model.Patient;
import dev.uffs.doisag.repository.AssignedScaleRepository;
import dev.uffs.doisag.repository.PatientRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
public class ScaleAssignmentService {
    // injecoes
    private final AssignedScaleRepository assignedScaleRepository;
    private final PatientRepository patientRepository;
    private NotificationService notificationService;

    public ScaleAssignmentService(AssignedScaleRepository assignedScaleRepository, PatientRepository patientRepository) {
        this.assignedScaleRepository = assignedScaleRepository;
        this.patientRepository = patientRepository;
    }

    @Autowired
    public void setNotificationService(@Lazy NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public AssignedScale assignScaleToPatient(Long patientId, AssignScaleDTO assignScaleDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new EntityNotFoundException("Paciente não encontrado"));

        AssignedScale newAssignment = new AssignedScale();
        newAssignment.setPatient(patient);
        newAssignment.setPrescriber(patient.getPrescriber());
        newAssignment.setScaleType(assignScaleDTO.scaleType());
        newAssignment.setStatus(AssignmentStatus.PENDENTE);
        newAssignment.setAssignedDate(LocalDate.now());

        AssignedScale savedAssignment = assignedScaleRepository.save(newAssignment);

        String notificationTitle = "Nova Tarefa: " + formatScaleName(savedAssignment.getScaleType());
        String notificationMessage = "Seu prescritor solicitou o preenchimento de uma nova escala. Acesse suas tarefas para responder.";
        notificationService.createNotification(patient, notificationTitle, notificationMessage, "FORM", "/escala-clinica");

        return savedAssignment;
    }

    public void completeAssignedScale(Long patientId, ScaleType scaleType) {
        assignedScaleRepository.findFirstByPatientIdAndScaleTypeAndStatusOrderByAssignedDateDesc(
                patientId,
                scaleType,
                AssignmentStatus.PENDENTE
        ).ifPresent(assignment -> {
            assignment.setStatus(AssignmentStatus.CONCLUIDO);
            assignment.setCompletedDate(LocalDate.now());
            assignedScaleRepository.save(assignment);
        });
    }

    private String formatScaleName(ScaleType scaleType) {
        String name = scaleType.toString().replace("_", " ").toLowerCase();
        name = name.replace("escala ", "").replace("registro ", "");
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }
}
