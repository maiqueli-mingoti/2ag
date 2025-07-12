# Sistema **2ag**
Este repositório contém o desenvolvimento de um sistema digital para gestão clínica de uma clínica integrativa especializada na prescrição e acompanhamento terapêutico com fitocanabinoides.

### Matrícula
maiqueli mingoti (20230004643) e caroline de quadros (20230000690)

### Estrutura do Repositório
- **`backend/`**: Código-fonte do back-end (Veja o [`README.md`](./backend/README.md))
  - **`doisag/`**: 

- **`database/`**: Modelagem do banco de dados
  - **`conceptual-model/`**: Arquivos do modelo conceitual
  - **`logical-model/`**: Arquivos do modelo logico

- **`docs/`**: Documentação do projeto
  - **`requisitos.pdf`**: Documento com os requisitos do sistema

- **`frontend/`**: Código-fonte da aplicação frontend (Veja o [`README.md`](./frontend/README.md))

### Nomenclatura:
Este projeto adota diferentes padrões de nomenclatura para arquivos, pastas, funções, variáveis, componentes, tipos e constantes, visando garantir organização, legibilidade e consistência em todo o código.
Um padrão bem definido é fundamental para facilitar o entendimento entre todos os desenvolvedores, reduzir erros e simplificar a manutenção a longo prazo. Como cada elemento no código tem uma função específica, adotar estilos distintos ajuda a identificar rapidamente seu propósito.
Considerando esses princípios, adotamos os seguintes padrões:

- Todos os **arquivos** e **pastas** devem ser nomeados utilizando o padrão **kebab-case**
- Todas as **funções** e **variáveis** devem ser nomeadas utilizando o padrão **camelCase**
- Todos os **componentes** e **tipos** devem ser nomeados utilizando o padrão **PascalCase**
- Todas as **constantes** devem ser nomeadas utilizando o padrão **SCREAMING_SNAKE_CASE**
  - Obs.: Apenas as constantes globais (salvas no diretório **constants**) ou constantes declaradas no início de um arquivo, fora de componentes/hooks/etc.

### Tecnologias

Este projeto utiliza uma arquitetura cliente-servidor com as seguintes tecnologias principais:

* **Backend**: Java 17, Spring Boot, Spring Data JPA, e PostgreSQL
* **Frontend**: React, Vite
* **Gerenciamento**: Maven (backend) e npm (frontend)
  
### Como Executar o Projeto Localmente

Para rodar a aplicação completa, você precisará subir tanto o backend quanto o frontend.

#### **Backend (Servidor)**

1.  **Pré-requisitos**: JDK 17, Maven e PostgreSQL instalados
2.  **Instruções**: As instruções detalhadas de setup do banco e execução estão no `README` específico do backend
    * **Acesse o [`backend/README.md`](./backend/README.md) para o guia completo**
3.  **Acesso**: O servidor rodará em `http://localhost:8080`

#### **Frontend (Cliente)**

1.  **Pré-requisitos**: Node.js (versão 18+) e npm
2.  **Instalação**:
    ```bash
    cd frontend
    npm install
    ```
3.  **Execução**:
    ```bash
    npm run dev
    ```
4.  **Acesso**: A aplicação estará disponível em `http://localhost:5173`
