package dev.uffs.doisag.repository;

import dev.uffs.doisag.model.AssignedScale;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AssignedScaleRepository extends JpaRepository<AssignedScale, Long> {

    // busca todas as escalas pendentes de um paciente específico
    List<AssignedScale> findByPatientIdAndStatus(Long patientId, AssignedScale.AssignmentStatus status);

    // busca todas as escalas pendentes designadas por um prescritor
    List<AssignedScale> findByPrescriberIdAndStatus(Long prescriberId, AssignedScale.AssignmentStatus status);
}