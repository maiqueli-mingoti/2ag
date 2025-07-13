### **backend do sistema doisag**

esse repositorio tem o código do backend do sistema doisag, uma api pra gerenciar e acompanhar pacientes que usam fitocanabinoides

-----

### **tecnologias**

  * **java 17**
  * **spring boot 3.5.0**
  * **spring data jpa** com hibernate pra cuidar do banco
  * **maven** pra gerenciar as dependências
  * **postgresql** como banco de dados

-----

### **pré-requisitos**

pra rodar o projeto, você vai precisar ter instalado:

  * java 17 ou mais novo
  * maven 3.x
  * postgresql rodando

-----

### **como rodar o projeto (instalação)**

1.  **clone o repositório:**

    ```bash
    git clone <url-do-seu-repositorio>
    cd doisag
    ```

2.  **arrume o banco de dados:**

      * crie um banco no seu postgres chamado `doisag`
      * dá uma olhada no arquivo `src/main/resources/application.yml` pra ver se o usuário e a senha do banco tão batendo com o seu. o padrão tá assim:
          * **url:** `jdbc:postgresql://localhost:5432/doisag`
          * **usuário:** `admindoisag`

3.  **instale as dependências:**

    ```bash
    mvn clean install
    ```

4.  **suba a aplicação:**

    ```bash
    mvn spring-boot:run
    ```

    se tudo der certo, a api vai tá rodando em `http://localhost:8080`

    **IMPORTANTE**: quando a aplicação sobe pela primeira vez, ela cria um **usuário de teste** pra você não ter que cadastrar um prescritor na mão

      * **email**: `prescritor@email.com`
      * **senha**: `123456`

-----

### **documentação da api**

essa aqui é a documentação pra te ajudar a integrar o front com a api. a ideia é ser um guia de como usar cada rota

  * **URL\_BASE**: `http://localhost:8080`
  * **CORS**: a api já tá liberada pra receber chamadas do seu front em `http://localhost:5173`

#### **como fazer o login (autenticação)**

o esquema de segurança é com TOKEN, então você manda o email e a senha do usuário, e a api te devolve um token JWT, a partir daí, pra qualquer outra chamada na api, você precisa mandar esse token junto

  * **COMO MANDAR O TOKEN**: no cabeçalho (header) da requisição, assim:
    `Authorization: Bearer <seu-token-jwt>`
  * **TIPOS DE USUÁRIO**:
      * `ROLE_ADMIN`: é o perfil do **prescritor**
      * `ROLE_USER`: é o perfil do **paciente**

#### **endpoints de autenticação**

##### **1. registrar novo paciente**

  * **ENDPOINT**: `POST /auth/register`
  * **AUTORIZAÇÃO**: pública
  * **CORPO DA REQUISIÇÃO (`RegisterDTO`)**:

| campo | tipo | descrição | regras de validação |
| :--- | :--- | :--- | :--- |
| `name` | `string` | nome completo do paciente | - |
| `email` | `string` | email que ele vai usar pra logar | precisa ser um email válido e único |
| `senha` | `string` | senha de acesso | no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial |
| `cpf` | `string` | cpf do paciente | só números e precisa ser um cpf válido |
| `birthDate` | `string` | data de nascimento (`YYYY-MM-DD`) | - |
| `phone` | `string` | telefone com ddd | só números |
| `address` | `objeto` | objeto com os dados de endereço | - |
| `professionalCode` | `string` | código do prescritor que vai acompanhar ele | precisa ser um código válido: três letras inicias do nome em maiusculo e dois numeros aletórios |

##### **2. efetuar login**

  * **ENDPOINT**: `POST /auth/login`
  * **AUTORIZAÇÃO**: pública.
  * **CORPO DA REQUISIÇÃO (`LoginDTO`)**: email e senha

#### **endpoints principais (CRUD)**

aqui ficam as rotas pra gerenciar os dados principais do sistema, todas precisam de autenticação

  * **prescritor (`/prescritor`)**
  * **paciente (`/paciente`)**
  * **consulta (`/consulta`)**
  * **prescrição (`/prescricao`)**
  * **anamnese (`/anamnese`)**
  * **acompanhamento (`/acompanhamento`)**
  * **escalas e registros (`/escala-hamilton`, `/registro-dor`, etc.)**

*cada uma dessas rotas tem as operações padrão: `GET`, `GET by id`, `POST`, `PUT`, `DELETE`*

-----

### **endpoints de lógica de negócio**

montei essas rotas pra facilitar a sua vida no front

#### **1. dashboards (`/dashboard`)**

essas rotas entregam os dados já prontos para as telas iniciais

  * **`GET /dashboard/prescritor/{id}`**: pega os dados para o painel do prescritor
  * **`GET /dashboard/paciente/{id}`**: pega os dados para o painel do paciente

#### **2. ciclo de tarefas de escalas**

esse fluxo permite que um prescritor envie uma escala para o paciente e que o sistema dê baixa nela automaticamente

  * **`POST /pacientes/{patientId}/escalas`**: designa uma nova escala para um paciente

      * **CORPO DA REQUISIÇÃO (`AssignScaleDTO`):**
        ```json
        {
          "scaleType": "ESCALA_HAMILTON" // ou qualquer outro tipo do enum ScaleType
        }
        ```
      * **RESPOSTA DE SUCESSO (`201 Created`):** retorna o objeto da tarefa criada

  * **para concluir uma tarefa**: não há um endpoint específico, quando o paciente submete o formulário correspondente (ex: `POST /escala-hamilton`), o backend automaticamente atualiza o status da tarefa de `PENDENTE` para `CONCLUIDO`

#### **3. relatórios de progresso**

essa rota fornece os dados prontos para montar gráficos de evolução

  * **`GET /pacientes/{patientId}/progresso`**: busca a série histórica de um atributo
  * **PARÂMETROS DA REQUISIÇÃO (obrigatórios):**
      * `atributo`: o que você quer acompanhar, valores possíveis: `DOR`, `SONO`, `HUMOR`, `ANSIEDADE`, etc (ver `TrackableAttribute.java`).
      * `periodo`: o período de tempo, valores possíveis: `DIAS_15`, `DIAS_30`, `DIAS_60`, `DIAS_90`.
  * **EXEMPLO DE CHAMADA:**
    `GET /pacientes/1/progresso?atributo=DOR&periodo=DIAS_30`
  * **EXEMPLO DE RESPOSTA:**
    ```json
    [
      { "date": "2025-06-15", "value": 8 },
      { "date": "2025-06-22", "value": 7 },
      { "date": "2025-06-29", "value": 5 }
    ]
    ```

-----

### **modelos json**

aqui tão uns exemplos de como os objetos json podem ser

##### **`Address`**

```json
{
  "street": "Rua Exemplo",
  "number": "123",
  "city": "Chapecó",
  "state": "SC",
  "country": "Brasil"
}
```

##### **`Patient` (exemplo de retorno)**

```json
{
  "id": 1,
  "name": "Nome do Paciente",
  "cpf": "12345678900",
  "email": "paciente@email.com",
  "birthDate": "1990-01-15",
  "phone": "49999887766",
  "address": { "..."},
  "prescriber": { "id": 1, "..."}
}
```

##### **`Prescription` (prescrição)**

```json
{
    "id": 1,
    "productDescription": "Óleo de Cannabis Full Spectrum 3000mg",
    "posology": "5 gotas, 2x ao dia",
    "brand": "Marca Exemplo",
    "concentration": "100mg/mL",
    "spectrum": "Full Spectrum",
    "observation": "Aumentar a dose após 15 dias, se necessário."
}
```
