# 🎬 Series Journal - Fase 2

**Desenvolvedora:** Caroline Toth Leite
**Curso:** Análise e Desenvolvimento de Sistemas (PUCRS - 2027)
**Disciplina:** Desenvolvimento de Sistemas Frontend

---

## 🚀 Sobre o Projeto
O **Series Journal** é uma aplicação web (SPA) desenvolvida em **React** para o gerenciamento de séries. O projeto implementa um CRUD completo consumindo a API REST `serieJournal-api`. 

A interface foi construída com foco na usabilidade, utilizando **Material-UI (MUI)** para estilização visual e **React Router** para navegação fluida entre as telas.

### 🛠️ Tecnologias Utilizadas
- **React** (Vite)
- **Material-UI (MUI)** (Estilização e Componentes)
- **React Router Dom** (Navegação de rotas)
- **Axios** (Requisições HTTP)
- **Vitest** (Testes Unitários)

---

## ⚙️ Como Executar o Projeto

Para testar a aplicação localmente, você precisará rodar a API (Back-end) e a Aplicação (Front-end) em terminais separados.

### 1. Inicializando a API (Back-end)
Navegue até a pasta da API (`serieJournal-api`) fornecida pelo professor e rode os comandos:

    npm install
    npm start

> A API estará disponível em: http://localhost:5000

### 2. Inicializando o Front-end
Com a API rodando, abra um novo terminal na pasta deste projeto React (`fase2`) e execute:

    npm install
    npm run dev

> Acesse a aplicação no navegador em: http://localhost:5173

---

## 🧪 Testes Unitários
Para rodar os testes configurados na aplicação, abra o terminal na pasta do projeto React e execute:

    npm run test

---

## 🧩 Estrutura de Componentes

A arquitetura do projeto foi pensada para garantir organização, separação de responsabilidades e reaproveitamento de código:

- **`App.jsx`**: Configuração global do tema (background personalizado via MUI) e definição das rotas principais (`BrowserRouter`).
- **`Home.jsx` (Página)**: Tela de boas-vindas e recepção do usuário.
- **`About.jsx` (Página)**: Tela informativa detalhando os objetivos do projeto.
- **`AddSerie.jsx` / `EditSerie.jsx` (Páginas)**: Telas conteinerizadas responsáveis por buscar dados (GET) e integrar o envio do formulário com a API (POST e PUT).
- **`ListSeries.jsx` (Página)**: Consome a lista de séries da API (GET) e fornece os dados para a interface visual.
- **`SerieForm.jsx` (Componente)**: Formulário reutilizável, gerencia os inputs de forma controlada (evitando sobreposição visual em campos de data) e valida os dados de entrada.
- **`SerieList.jsx` (Componente)**: Componente de apresentação puro. Renderiza os cards do Material-UI na tela e emite eventos de exclusão (DELETE) para a página pai.

---

## 📸 Capturas de Tela

### Tela Inicial (Home)
![Home](./inicial.jpg)

### Lista de Séries
![Lista de Series](./lista.jpg)

### Formulário de Cadastro
![Cadastrar](./cadastrar.jpg)

### Formulário de Edição
![Editar](./editar.jpg)