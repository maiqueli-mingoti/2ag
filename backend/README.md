### **backend do sistema doisag**

esse repositorio tem o código do backend do sistema doisag, é uma api pra gerenciar e acompanhar pacientes que usam fitocanabinoides.

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

      * crie um banco no seu postgres chamado `doisag`.
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

    se tudo der certo, a api vai tá rodando em `http://localhost:8080`.

    **IMPORTANTE**: quando a aplicação sobe pela primeira vez, ela cria um **usuário de teste** pra você não ter que cadastrar um prescritor na mão.

      * **email**: `prescritor@email.com`
      * **senha**: `123456`

-----

### **documentação da api**

essa aqui é a documentação pra te ajudar a integrar o front com a api. a ideia é ser um guia de como usar cada rota.

  * **URL\_BASE**: `http://localhost:8080`
  * **CORS**: a api já tá liberada pra receber chamadas do seu front em `http://localhost:5173`.

#### **como fazer o login (autenticação)**

o esquema de segurança é com TOKEN. então você manda o email e a senha do usuário, e a api te devolve um token JWT. a partir daí, pra qualquer outra chamada na api, você precisa mandar esse token junto.

  * **COMO MANDAR O TOKEN**: no cabeçalho (header) da requisição, assim:
    `Authorization: Bearer <seu-token-jwt>`

  * **TIPOS DE USUÁRIO**:

      * `ROLE_ADMIN`: é o perfil do **prescritor**.
      * `ROLE_USER`: é o perfil do **paciente**.

#### **endpoints de autenticação**

##### **1. registrar novo paciente**

essa rota cria um novo paciente no sistema e já amarra ele a um prescritor.

  * **ENDPOINT**: `POST /auth/register`
  * **AUTORIZAÇÃO**: não precisa, é uma rota pública.
  * **O QUE MANDAR NO CORPO (`RegisterDTO`)**:

| campo | tipo | descrição | regras de validação |
| :--- | :--- | :--- | :--- |
| `name` | `string` | nome completo do paciente. | - |
| `email` | `string` | email que ele vai usar pra logar. | precisa ser um email válido e único, ninguém mais pode ter o mesmo. |
| `senha` | `string` | senha de acesso. | no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial. |
| `cpf` | `string` | cpf do paciente. | só números e precisa ser um cpf válido. |
| `birthDate` | `string` | data de nascimento (`YYYY-MM-DD`). | - |
| `phone` | `string` | telefone com ddd. | só números. |
| `address` | `objeto` | objeto com os dados de endereço. | - |
| `professionalCode` | `string` | código do prescritor que vai cuidar dele. | precisa ser um código que já existe no sistema. |

  * **RESPOSTAS**:
      * **`201 Created`**: se der tudo certo, você recebe uma mensagem de sucesso.
        ```json
        { "message": "cadastro realizado com sucesso, seja bem-vindo(a)!" }
        ```
      * **`400 Bad Request`**: se o email já existir ou o código do prescritor for inválido.

##### **2. efetuar login**

aqui o usuário (tanto paciente quanto prescritor) faz o login pra pegar o token de acesso.

  * **ENDPOINT**: `POST /auth/login`
  * **AUTORIZAÇÃO**: não precisa, é uma rota pública.
  * **O QUE MANDAR NO CORPO (`LoginDTO`)**:

| campo | tipo | descrição |
| :--- | :--- | :--- |
| `email` | `string` | email que o usuário cadastrou. |
| `senha` | `string` | senha que o usuário cadastrou. |

  * **RESPOSTAS**:
      * **`200 OK`**: se o login for válido, você recebe o token.
        ```json
        { "token": "ey..." }
        ```
      * **`403 Forbidden`**: se o email ou a senha estiverem errados.

#### **endpoints principais**

aqui ficam as rotas pra gerenciar os dados principais do sistema. todas precisam de autenticação (mandar o token no header).

  * **prescritor (`/prescritor`)**
  * **paciente (`/paciente`)**
  * **consulta (`/consulta`)**
  * **prescrição (`/prescricao`)**
  * **anamnese (`/anamnese`)**
  * **acompanhamento (`/acompanhamento`)**

*cada uma dessas rotas tem as operações padrão: `GET`, `GET by id`, `POST`, `PUT`, `DELETE`.*

#### **endpoints de escalas e registros 📝**

essas são as rotas pros formulários e diários que os pacientes ou prescritores preenchem.

  * **/escala-hamilton**: pra escala de ansiedade de hamilton.
  * **/escala-pittsburgh**: pra escala de qualidade do sono de pittsburgh.
  * **/mini-exame**: pro mini-exame do estado mental (meem).
  * **/registro-dor**: pro diário de acompanhamento de dor.
  * **/registro-sono**: pro diário de acompanhamento de sono.
  * **/registro-tea**: pro diário de acompanhamento de TEA.

*assim como as outras, todas essas rotas também têm as operações padrão: `GET`, `GET by id`, `POST`, `PUT`, `DELETE`.*

#### **como são os dados (modelos json)**

aqui tão uns exemplos de como os objetos json são, pra você saber o que esperar e o que mandar.

##### `Address`

```json
{
  "street": "Rua Exemplo",
  "number": "123",
  "city": "Chapecó",
  "state": "SC",
  "country": "Brasil"
}
```

##### `Patient` (exemplo de retorno)

```json
{
  "id": 1,
  "name": "Nome do Paciente",
  "cpf": "12345678900",
  "email": "paciente@email.com",
  "birthDate": "1990-01-15",
  "phone": "49999887766",
  "address": { ... },
  "prescriber": { "id": 1, ... }
}
```

##### `Prescription` (prescrição/receita)

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
