## configuração do PostgreSQL para o projeto doisag**

**usa Linux (Debian/Ubuntu)** e **não tem PostgreSQL instalado ainda**.


### ✅ **instalar o PostgreSQL**

No terminal, rode:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

---

### **verificar se o serviço está ativo**

```bash
sudo systemctl status postgresql
```

Se aparecer active (running) está tudo certo.
Se não, ative:

```bash
sudo systemctl start postgresql
```

---

### **acessar o console do PostgreSQL**

```bash
sudo -u postgres psql
```

Vai aparecer um prompt tipo:

```
postgres=#
```

---

### **criar o usuário da aplicação**

Ainda dentro do psql, crie o usuário `admindoisag` com a senha que a aplicação espera.
No nosso caso, vamos usar `123456`:

```sql
CREATE USER admindoisag WITH PASSWORD '123456';
```

---

### **criar o banco de dados e definir o dono**

```sql
CREATE DATABASE doisag OWNER admindoisag;
```

---

### **garantir que o usuário tem todos os privilégios**

```sql
GRANT ALL PRIVILEGES ON DATABASE doisag TO admindoisag;
```

---

### 🚪 **sair do console**

```sql
\q
```

---

### ⚙️ **conferir a configuração no projeto**

No arquivo:

```
beckend/src/main/resources/application.yml
```

Verifique se está assim:

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/doisag
    username: admindoisag
    password: 123456
```

---

### ▶**rodar a aplicação**

Na pasta do projeto, rode:

```bash
mvn clean install
mvn spring-boot:run
```

Se tudo der certo, a API vai subir em:

```
http://localhost:8080
```

---

### **usuário de teste já cadastrado**

Ao rodar o projeto pela primeira vez, já existe um prescritor para testes:

* **Email:** [prescritor@email.com](mailto:prescritor@email.com)
* **Senha:** 123456