package dev.uffs.doisag.service;

import dev.uffs.doisag.model.Patient;
import dev.uffs.doisag.repository.PatientRepository;
import org.springframework.stereotype.Service;
import dev.uffs.doisag.dto.RegisterDTO;
import dev.uffs.doisag.model.Prescriber;
import dev.uffs.doisag.repository.PrescriberRepository;
import dev.uffs.doisag.repository.UsersRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import jakarta.validation.ValidationException;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
    private final PatientRepository patientRepository;
    private final UsersRepository usersRepository;
    private final PrescriberRepository prescriberRepository;
    private final PasswordEncoder passwordEncoder;

    public PatientService(PasswordEncoder passwordEncoder, PatientRepository patientRepository, UsersRepository usersRepository, PrescriberRepository prescriberRepository) {
        this.passwordEncoder = passwordEncoder;
        this.patientRepository = patientRepository;
        this.usersRepository = usersRepository;
        this.prescriberRepository = prescriberRepository;
    }

    // create patient
    public Patient create(Patient patient) {
        return patientRepository.save(patient);
    }

    // read all patients
    public List<Patient> getAll() {
        return patientRepository.findAll();
    }

    // read by id patient
    public Optional<Patient> getById(Long id) {
        return patientRepository.findById(id);
    }

    // buscar pacientes por prescritor
    public List<Patient> getPatientsByPrescriberId(Long prescriberId) {
        return patientRepository.findAllByPrescriberId(prescriberId);
    }

    // update patient
    public Patient update(Long id, Patient patientDetails) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado com o id: " + id));

        patient.setName(patientDetails.getName());
        patient.setEmail(patientDetails.getEmail());
        patient.setPhone(patientDetails.getPhone());
        patient.setCpf(patientDetails.getCpf());
        patient.setBirthDate(patientDetails.getBirthDate());
        patient.setAddress(patientDetails.getAddress());
        patient.setPassword(patientDetails.getPassword());

        return patientRepository.save(patient);
    }

    // delete patient
    public void delete(Long id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado com o id: " + id));
        patientRepository.delete(patient);
    }

    // método para registrar um paciente
    public Patient registerPatient(RegisterDTO dados) {
        // verifica se o email já está em uso
        if (usersRepository.findByEmail(dados.email()) != null) {
            throw new ValidationException("email já cadastrado no sistema!");
        }

        // busca o prescritor pelo código fornecido
        Prescriber prescriber = prescriberRepository.findByProfessionalCode(dados.professionalCode())
                .orElseThrow(() -> new ValidationException("código do prescritor inválido!"));

        // cria a nova entidade paciente
        var patient = new Patient();
        patient.setName(dados.name());
        patient.setEmail(dados.email());
        patient.setCpf(dados.cpf());
        patient.setPhone(dados.phone());
        patient.setBirthDate(dados.birthDate());
        patient.setAddress(dados.address());

        // criptografa a senha antes de salvar
        patient.setPassword(passwordEncoder.encode(dados.senha()));

        // faz o vínculo com o prescritor
        patient.setPrescriber(prescriber);

        // salva o novo paciente no banco
        return patientRepository.save(patient);
    }
}