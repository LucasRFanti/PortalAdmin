# Portal Admin API

Bem-vindo ao **Portal Admin API**! Esta é uma API RESTful desenvolvida em **.NET 8** com o objetivo de realizar operações de **CRUD** (Criar, Ler, Atualizar, Deletar) para o gerenciamento de funcionários.

## 🚀 Tecnologias Utilizadas

- **.NET 8**
- **C#**
- **ASP.NET Core Web API**
- **Entity Framework Core** (SQL Server)
- **Swagger / OpenAPI** (Para documentação da API)

## ⚙️ Funcionalidades (Endpoints)

A API possui os seguintes endpoints principais para gerenciar os funcionários (`Employee`):

- `GET /api/employess` - Retorna a lista de todos os funcionários.
- `GET /api/employess/{id}` - Retorna um funcionário específico pelo ID.
- `POST /api/employess` - Adiciona um novo funcionário.
- `PUT /api/employess/{id}` - Atualiza os dados de um funcionário existente.
- `DELETE /api/employess/{id}` - Remove um funcionário do sistema. *(Se você já implementou)*

## 🛠️ Como Executar o Projeto

1. Clone o repositório ou baixe o código-fonte.
2. Certifique-se de ter o **.NET 8 SDK** instalado na sua máquina.
3. Configure a sua string de conexão (`DefaultConnection`) no arquivo `appsettings.json` para apontar para o seu banco de dados SQL Server local ou em nuvem.
4. Abra o terminal na raiz do projeto e execute as migrations para criar o banco de dados:
   ```bash
   dotnet ef database update
   ```
5. Para rodar a aplicação, execute:
   ```bash
   dotnet run
   ```
6. Acesse a documentação interativa da API através do navegador (geralmente gerada em `https://localhost:xxxx/swagger`).

## 👨‍💻 Autor

- **Lucas Fanti** - [GitHub](https://github.com/LucasRFanti)
