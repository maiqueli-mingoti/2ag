package dev.uffs.doisag;

import dev.uffs.doisag.model.Patient;
import dev.uffs.doisag.model.Prescriber;
import dev.uffs.doisag.service.PrescriberService;
import dev.uffs.doisag.repository.UsersRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;

@SpringBootApplication
public class DoisagApplication {

	public static void main(String[] args) {
		SpringApplication.run(DoisagApplication.class, args);
	}

	// este bean agora cria um prescritor e um paciente de teste se eles não existirem
	@Bean
	public CommandLineRunner initDatabase(UsersRepository usersRepository, PasswordEncoder passwordEncoder, PrescriberService prescriberService) {
		return args -> {
			// garantimos q o prescriber de teste exista
			String prescriberEmail = "prescritor@email.com";
			// a gente usa UserDetails aqui pra ser mais genérico
			UserDetails prescriberDetails = usersRepository.findByEmail(prescriberEmail);
			Prescriber testPrescriber;

			// se não achou o prescritor no banco, a gente cria ele
			if (prescriberDetails == null) {
				System.out.println("CRIANDO USUARIO DE TESTE (PRESCRITOR): " + prescriberEmail);

				var newPrescriber = new Prescriber();
				newPrescriber.setName("Teste");
				newPrescriber.setEmail(prescriberEmail);
				newPrescriber.setPassword("123456");
				newPrescriber.setProfession("biomedica");
				newPrescriber.setProfessionalRegistry("9876");
				testPrescriber = prescriberService.create(newPrescriber);

			} else {
				// se já existia, a gente só pega ele pra usar no vínculo
				testPrescriber = (Prescriber) prescriberDetails;
			}

			// criamos o paciente de test se ele n existir
			String patientEmail = "paciente@email.com";
			if (usersRepository.findByEmail(patientEmail) == null) {
				System.out.println("CRIANDO USUARIO DE TESTE (PACIENTE): " + patientEmail);

				var newPatient = new Patient();
				newPatient.setName("Paciente Teste da Silva");
				newPatient.setEmail(patientEmail);
				newPatient.setPassword(passwordEncoder.encode("123456"));
				newPatient.setCpf("00000000000");
				newPatient.setBirthDate(LocalDate.of(1990, 5, 15));

				// vinculo os dois
				// o paciente de teste pertence ao prescritor de teste
				newPatient.setPrescriber(testPrescriber);

				// salva o novo paciente no banco
				usersRepository.save(newPatient);
			}
		};
	}
}