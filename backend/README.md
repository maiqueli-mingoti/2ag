# Sistema de Gestão de Pacientes - Backend (doisag)

Este repositório contém o código-fonte do backend para o sistema "doisag", uma API RESTful para gestão e acompanhamento de pacientes em tratamento com fitocanabinoides.

## Tecnologias Utilizadas

* **Java**: Versão 17
* **Spring Boot**: Versão 3.5.0
* **Spring Data JPA**: Para persistência de dados com Hibernate.
* **Maven**: Para gerenciamento de dependências e build do projeto.
* **PostgreSQL**: Banco de dados relacional.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* Java 17 ou superior.
* Maven 3.x.
* Um servidor PostgreSQL em execução.

## Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd doisag
    ```

2.  **Configure o Banco de Dados:**
    Certifique-se de que o seu banco PostgreSQL tenha um banco de dados chamado `doisag` e que as credenciais no arquivo `src/main/resources/application.yml` estejam corretas.
    * **URL:** `jdbc:postgresql://localhost:5432/doisag`
    * **Usuário:** `admindoisag`

3.  **Instale as dependências:**
    ```bash
    mvn clean install
    ```

4.  **Execute a aplicação:**
    ```bash
    mvn spring-boot:run
    ```
    A API estará disponível em `http://localhost:8080`.

---

## 📖 Documentação da API

Esta seção é destinada aos desenvolvedores que irão consumir os recursos da API.

### Informações Gerais

* **URL Base da API**: `http://localhost:8080`
* **CORS**: A API está configurada para aceitar requisições do frontend executando em `http://localhost:5173`.

### Endpoints Principais

#### Consultas (`/consulta`)
* `POST /consulta` - Cria uma nova consulta.
* `GET /consulta` - Retorna a lista de todas as consultas.
* `GET /consulta/{id}` - Busca uma consulta pelo seu ID.
* `PUT /consulta/{id}` - Atualiza uma consulta existente.
* `DELETE /consulta/{id}` - Remove uma consulta.

#### Pacientes (`/Paciente`)
* `POST /Paciente` - Cria um novo paciente.
* `GET /Paciente` - Retorna a lista de todos os pacientes.
* `PUT /Paciente/{id}` - Atualiza um paciente existente.
* `DELETE /Paciente/{id}` - Remove um paciente.

#### Prescritores (`/Prescritor`)
* `POST /Prescritor` - Cria um novo profissional prescritor.
* `GET /Prescritor` - Retorna a lista de todos os prescritores.

### Modelos de Dados (Exemplos JSON)

**Objeto Patient:**
```json
{
  "name": "Nome Completo do Paciente",
  "cpf": "123.456.789-00",
  "email": "paciente@email.com",
  "password": "senha_do_paciente",
  "birthDate": "1990-01-30",
  "phone": "+5549999999999",
  "address": {
    "street": "Rua Exemplo",
    "number": "123",
    "city": "Chapecó",
    "state": "SC",
    "country": "Brasil"
  }
}
```

**Objeto Appointment:**
```json
{
  "dateTime": "2025-08-15T10:30:00",
  "modality": "Presencial",
  "status": "Agendado",
  "diagnosis": "Diagnóstico do Paciente",
  "clinicalObservation": "Observações clínicas aqui.",
  "therapeuticPlan": "Plano terapêutico aqui.",
  "evolution": "Evolução do paciente aqui."
}
```