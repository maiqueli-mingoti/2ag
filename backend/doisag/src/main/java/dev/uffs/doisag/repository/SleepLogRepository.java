package dev.uffs.doisag.repository;

import dev.uffs.doisag.model.SleepLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SleepLogRepository extends JpaRepository<SleepLog, Long> {
}
