package dev.uffs.doisag.repository;

import dev.uffs.doisag.model.Prescriber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PrescriberRepository extends JpaRepository<Prescriber, Long> {

    // método para buscar um prescritor pelo código profissional
    Optional<Prescriber> findByProfessionalCode(String professionalCode);
    // método pra checar se um código já está em uso
    boolean existsByProfessionalCode(String professionalCode);

    // checa se um registro profissional já existe no banco
    boolean existsByProfessionalRegistry(String professionalRegistry);
}
