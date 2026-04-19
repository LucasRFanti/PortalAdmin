# Portal Admin

Sistema de gerenciamento de funcionários com autenticação JWT, desenvolvido com **Angular 19** no frontend e **.NET 8** no backend.

## 🚀 Tecnologias

**Backend**
- .NET 8 / ASP.NET Core Web API
- Entity Framework Core + SQL Server
- Autenticação JWT (BCrypt + JwtBearer)
- Swagger / OpenAPI

**Frontend**
- Angular 19 (Standalone Components)
- Reactive Forms
- HttpClient + Interceptor JWT
- Proxy para desenvolvimento local

## 📁 Estrutura do Repositório

    PortalAdmin/
    ├── backend/     ← API .NET 8
    └── frontend/    ← App Angular 19

## ⚙️ Como Executar

### Backend

1. Configure a connection string no `backend/appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "sua connection string aqui"
   }
   ```
2. Abra `backend/PortalAdmin.slnx` no Visual Studio
3. No Package Manager Console:
   ```powershell
   Update-Database
   ```
4. Rode o projeto (F5)

> Na primeira execução, um usuário admin é criado automaticamente.

### Frontend

```bash
cd frontend
npm install
ng serve
```

Acesse `http://localhost:4200`

## 🔐 Acesso

| Campo | Valor |
|-------|-------|
| Email | `admin@portal.com` |
| Senha | `123456` |

## 📡 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/auth/login` | Autenticação |
| `GET` | `/api/employess` | Lista funcionários |
| `GET` | `/api/employess/{id}` | Busca por ID |
| `POST` | `/api/employess` | Cria funcionário |
| `PUT` | `/api/employess/{id}` | Atualiza funcionário |
| `DELETE` | `/api/employess/{id}` | Remove funcionário |

## 👨‍💻 Autor

**Lucas Fanti** — [GitHub](https://github.com/LucasRFanti)