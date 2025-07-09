package dev.uffs.doisag.dto;

import dev.uffs.doisag.model.Address;
import java.time.LocalDate;

// dto para receber os dados de um novo paciente no momento do cadastro
public record RegisterDTO(
        String name,
        String email,
        String senha, // nome diferente de password para não confundir
        String cpf,
        LocalDate birthDate,
        String phone,
        Address address,
        String professionalCode // código do prescritor para fazer o vínculo
) {
}