# Stock - Sistema de Controle de Estoque

Este projeto é um sistema completo de controle de estoque, composto por um **frontend Angular** e uma **API ASP.NET Core** conectada a um banco de dados **MySQL**.

---

## Funcionalidades

- Cadastro de produtos (nome, categoria, quantidade, preço unitário)
- Listagem de produtos em grid responsivo
- Edição de produtos via modal
- Exclusão de produtos com confirmação
- Integração total com API RESTful

---

## Tecnologias Utilizadas

- **Frontend:** Angular
- **Backend:** ASP.NET Core Web API
- **Banco de Dados:** MySQL
- **ORM:** Entity Framework Core (Pomelo)

---

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Configurar o banco de dados

- Crie um banco MySQL chamado `stock_db` (ou altere o nome no arquivo `API_stock/appsettings.json`).
- Ajuste o usuário e senha conforme seu ambiente.

### 3. Rodar as migrations (primeira vez)

```bash
cd API_stock
dotnet ef database update
```

### 4. Rodar a API

```bash
cd API_stock
dotnet run
```
A API estará disponível em `http://localhost:5023`.

### 5. Rodar o frontend Angular

```bash
cd front_stock
npm install
ng serve
```
Acesse `http://localhost:4200` no navegador.

---

## Estrutura do Projeto

```
API_stock/         # Backend ASP.NET Core
  Controllers/
  Data/
  Models/
  Program.cs
  appsettings.json

front_stock/       # Frontend Angular
  src/
    app/
      estoque/
    index.html
    styles.css
  angular.json
  package.json
```

---

## Configuração de conexão

No arquivo [`API_stock/appsettings.json`](API_stock/appsettings.json):

```json
"ConnectionStrings": {
  "DefaultConnection": "server=localhost;port=3306;database=stock_db;user=root;password=admin;"
}
```

---

## Exemplos de produtos para teste

- Caneta Azul, Papelaria, 100, 2.50
- Caderno Universitário, Papelaria, 50, 18.90
- Mouse USB, Informática, 30, 45.00

---

## Scripts úteis

- Rodar API: `dotnet run` (na pasta API_stock)
- Rodar frontend: `ng serve` (na pasta front_stock)
- Rodar migrations: `dotnet ef database update`

---

## Observações

- O frontend e o backend devem estar rodando ao mesmo tempo para integração total.
- O backend aceita requisições de qualquer origem (CORS liberado para facilitar o desenvolvimento).

---

## Licença

Este projeto é livre para uso acadêmico e pessoal.