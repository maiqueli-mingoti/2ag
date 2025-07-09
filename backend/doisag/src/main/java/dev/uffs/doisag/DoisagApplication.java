package dev.uffs.doisag;

import dev.uffs.doisag.model.Prescriber;
import dev.uffs.doisag.repository.UsersRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class DoisagApplication {

	public static void main(String[] args) {
		SpringApplication.run(DoisagApplication.class, args);
	}

	// este bean é um código que roda uma única vez quando a aplicação sobe
	// vamos usar ele pra criar um usuário de teste se ele não existir
	@Bean
	public CommandLineRunner initDatabase(UsersRepository usersRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			// email do nosso usuário de teste
			String testEmail = "prescritor@email.com";

			// verifica se o usuário já existe no banco
			if (usersRepository.findByEmail(testEmail) == null) {
				System.out.println("CRIANDO USUARIO DE TESTE: " + testEmail);

				// cria um novo prescritor
				var prescriber = new Prescriber();
				prescriber.setName("dr(a) teste");
				prescriber.setEmail(testEmail);
				prescriber.setPassword(passwordEncoder.encode("123456"));
				prescriber.setProfession("médico(a)");

				prescriber.setProfessionalCode("TESTE123");

				// salva o novo usuário no banco de dados
				usersRepository.save(prescriber);
			}
		};
	}
}