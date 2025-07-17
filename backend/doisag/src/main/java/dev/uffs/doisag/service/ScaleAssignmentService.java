package dev.uffs.doisag.service;

import dev.uffs.doisag.dto.AssignScaleDTO;
import dev.uffs.doisag.dto.AssignedScaleResponseDTO;
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
import java.util.List;
import org.springframework.context.MessageSource;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
public class ScaleAssignmentService {
    // injecoes
    private final AssignedScaleRepository assignedScaleRepository;
    private final PatientRepository patientRepository;
    private NotificationService notificationService;
    private final MessageSource messageSource;

    public ScaleAssignmentService(AssignedScaleRepository assignedScaleRepository, PatientRepository patientRepository, MessageSource messageSource, NotificationService notificationService) {
        this.assignedScaleRepository = assignedScaleRepository;
        this.patientRepository = patientRepository;
        this.messageSource = messageSource;
        this.notificationService = notificationService;
    }

    @Autowired
    public void setNotificationService(@Lazy NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public AssignedScaleResponseDTO assignScaleToPatient(Long patientId, AssignScaleDTO assignScaleDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new EntityNotFoundException("Paciente não encontrado"));

        AssignedScale newAssignment = new AssignedScale();
        newAssignment.setPatient(patient);
        newAssignment.setPrescriber(patient.getPrescriber());
        newAssignment.setScaleType(assignScaleDTO.scaleType());
        newAssignment.setStatus(AssignmentStatus.PENDENTE);
        newAssignment.setAssignedDate(LocalDate.now());

        // a gente salva a entidade no banco
        AssignedScale savedAssignment = assignedScaleRepository.save(newAssignment);

        String scaleName = formatScaleName(savedAssignment.getScaleType());
        String notificationTitle = messageSource.getMessage("notification.new_task.title", new Object[]{scaleName}, Locale.getDefault());
        String notificationMessage = messageSource.getMessage("notification.new_task.message", null, Locale.getDefault());

        notificationService.createNotification(patient, notificationTitle, notificationMessage, "FORM", "/escala-clinica");

        return new AssignedScaleResponseDTO(savedAssignment);
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

    // busca a lista de escalas designadas para um paciente
    public List<AssignedScaleResponseDTO> getAssignedScalesForPatient(Long patientId) {
        // a gente busca a lista de entidades do banco
        List<AssignedScale> scales = assignedScaleRepository.findByPatientIdOrderByAssignedDateDesc(patientId);

        // transforma cada entidade em um DTO antes de retornar
        return scales.stream()
                .map(AssignedScaleResponseDTO::new) // para cada escala cria um dto
                .collect(Collectors.toList());
    }
}
