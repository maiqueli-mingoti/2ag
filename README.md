# Sistema **2ag**
Este repositório contém o desenvolvimento de um sistema digital para gestão clínica de uma clínica integrativa especializada na prescrição e acompanhamento terapêutico com fitocanabinoides.

### Matrícula
maiqueli mingoti (20230004643) e caroline de quadros (20230000690)

### Estrutura do Repositório
- **`backend/`**: Código-fonte do back-end da aplicação.
  - **`doisag/`**: Estrutura inicial do backend com pacotes e classes.

- **`database/`**: Modelagem do banco de dados.
  - **`conceptual-model/`**: Arquivos do modelo conceitual do banco de dados.

- **`docs/`**: Documentação do projeto.
  - **`requisitos.pdf`**: Documento com os requisitos do sistema.

- **`frontend/`**: Contém o código-fonte da aplicação frontend (React com Vite).

### Nomenclatura:
Este projeto adota diferentes padrões de nomenclatura para arquivos, pastas, funções, variáveis, componentes, tipos e constantes, visando garantir organização, legibilidade e consistência em todo o código.
Um padrão bem definido é fundamental para facilitar o entendimento entre todos os desenvolvedores, reduzir erros e simplificar a manutenção a longo prazo. Como cada elemento no código tem uma função específica, adotar estilos distintos ajuda a identificar rapidamente seu propósito.
Considerando esses princípios, adotamos os seguintes padrões:

- Todos os **arquivos** e **pastas** devem ser nomeados utilizando o padrão **kebab-case**
- Todas as **funções** e **variáveis** devem ser nomeadas utilizando o padrão **camelCase**
- Todos os **componentes** e **tipos** devem ser nomeados utilizando o padrão **PascalCase**
- Todas as **constantes** devem ser nomeadas utilizando o padrão **SCREAMING_SNAKE_CASE**
  - Obs.: Apenas as constantes globais (salvas no diretório **constants**) ou constantes declaradas no início de um arquivo, fora de componentes/hooks/etc.

### Como Acessar o Frontend:

Para acessar e executar o frontend da aplicação, siga os passos abaixo:

Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

• Node.js (versão 18 ou superior)

• npm (gerenciador de pacotes do Node.js)

Instalação das Dependências

1. Navegue até o diretório do frontend:

2. Instale as dependências do projeto utilizando o npm install:

Executando a Aplicação

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento do frontend:

### npm run dev

O frontend estará disponível em http://localhost:5173, ou outra porta disponível, caso a 5173 esteja em uso.


