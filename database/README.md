# Configuração do Banco de Dados PostgreSQL para o Projeto "doisag"

Este documento detalha o processo completo para instalar e configurar o ambiente de banco de dados PostgreSQL necessário para a execução do backend do projeto `doisag`.

## Passo 1: Instalação do PostgreSQL

Escolha o guia correspondente ao seu sistema operacional.

### Windows

1.  **Download**: Baixe o instalador oficial na página [PostgreSQL Downloads](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).
2.  **Instalação**:
    * Siga as instruções do instalador.
    * **Defina uma senha para o superusuário `postgres`** quando solicitado. Anote esta senha.
    * Garanta que a opção **"Command Line Tools"** esteja marcada para ser instalada.
3.  **Configurar Variável de Ambiente (PATH)**:
    * No menu Iniciar, pesquise por "Editar as variáveis de ambiente do sistema".
    * Em "Variáveis de Ambiente" > "Variáveis do sistema", edite a variável `Path`.
    * Adicione um novo caminho para a pasta `bin` da sua instalação, que geralmente é `C:\Program Files\PostgreSQL\<VERSÃO>\bin`.

### macOS (via Homebrew)

1.  **Instalar Homebrew**: Se não tiver, instale-o a partir do site [brew.sh](https://brew.sh/).
2.  **Instalar PostgreSQL**: Abra o Terminal e execute:
    ```bash
    brew install postgresql
    ```
3.  **Iniciar Serviço**: Para que o banco de dados esteja sempre em execução, inicie o serviço:
    ```bash
    brew services start postgresql
    ```

### Linux (Debian/Ubuntu)

1.  **Instalar PostgreSQL**: Abra o Terminal e execute:
    ```bash
    sudo apt update
    sudo apt install postgresql postgresql-contrib
    ```

## Passo 2: Criação de Usuários e Banco de Dados

Após a instalação, vamos configurar os usuários e o banco de dados específico da aplicação.

### 2.1. Acessando o `psql`

* **Windows**: Abra o Terminal (CMD/PowerShell) e execute `psql -U postgres`. Digite a senha que você criou na instalação.
* **macOS**: No Terminal, execute `psql postgres`.
* **Linux**: No Terminal, execute `sudo -u postgres psql`.

### 2.2. Criando um Superusuário Pessoal (Boa Prática)

Dentro do `psql` (o prompt mudará para `postgres=#`), crie um usuário para você. **Substitua `<seu_nome_de_usuario>` e `<sua_senha_segura>` por suas credenciais.**

```sql
CREATE ROLE <seu_nome_de_usuario> WITH LOGIN SUPERUSER PASSWORD '<sua_senha_segura>';
```
Após criar, saia do `psql` com o comando `\q`.

### 2.3. Criando o Usuário e o Banco de Dados da Aplicação

1.  Acesse o `psql` novamente, desta vez com seu usuário recém-criado:
    ```bash
    psql -U <seu_nome_de_usuario> -d postgres
    ```
    O sistema pedirá a sua senha pessoal.

2.  Crie o usuário `admindoisag`. **Escolha uma senha forte para a aplicação e anote-a.**
    ```sql
    CREATE USER admindoisag WITH PASSWORD '<senha_para_a_aplicacao>';
    ```

3.  Crie o banco de dados `doisag` e defina `admindoisag` como seu dono:
    ```sql
    CREATE DATABASE doisag OWNER admindoisag;
    ```
4.  Saia do `psql` com `\q`.

## Passo 3: Configuração do Arquivo da Aplicação

Finalmente, atualize o projeto para que ele aponte para o banco de dados que você acabou de criar.

1.  Navegue até a pasta do projeto e abra o arquivo: `src/main/resources/application.yml`.
2.  Localize a seção `datasource` e substitua o `password` pelo que você criou no passo 2.3.

    **Exemplo de alteração:**

    ```yaml
    # src/main/resources/application.yml

    spring:
      datasource:
        url: jdbc:postgresql://localhost:5432/doisag
        username: admindoisag
        password: '<sua_senha>' # substitua pela senha que você criou para o usuário admindoisag
      ...
    ```
3.  Salve o arquivo.

## Conclusão

Seu ambiente de banco de dados agora está completamente configurado e pronto para ser utilizado pela aplicação `doisag`. Ao executar o backend, ele se conectará usando as credenciais que você definiu.