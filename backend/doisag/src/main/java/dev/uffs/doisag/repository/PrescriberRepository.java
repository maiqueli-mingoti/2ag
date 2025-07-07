package dev.uffs.doisag.repository;

import dev.uffs.doisag.model.Prescriber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrescriberRepository extends JpaRepository<Prescriber, Long> {
}
