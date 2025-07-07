package dev.uffs.doisag.repository;

import dev.uffs.doisag.model.TEAScale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TEAScaleRepository extends JpaRepository<TEAScale, Long> {
}
