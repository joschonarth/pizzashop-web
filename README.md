<h1 align="center">🍕 pizza.shop</h1>

<p align="center"><i>Painel administrativo para gerenciamento de pizzaria, desenvolvido com React, Vite e integração completa via API.</i>
  <br/><br/>
  <img src="https://img.shields.io/github/last-commit/joschonarth/pizzashop-web?style=for-the-badge&color=EC003F&labelColor=1C1E26" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/joschonarth/pizzashop-web?style=for-the-badge&color=EC003F&labelColor=1C1E26" alt="top-language">
  <img src="https://img.shields.io/github/languages/count/joschonarth/pizzashop-web?style=for-the-badge&color=EC003F&labelColor=1C1E26" alt="languages-count">
</p>

![dashboard](https://github.com/user-attachments/assets/911a3efb-5496-4dd6-9e13-90e49842756b)

![orders](https://github.com/user-attachments/assets/97d6b7ee-b18c-4a0c-9335-9eb34cea9534)

## 📖 Visão Geral

**pizza.shop** é uma aplicação web voltada para o gerenciamento de pedidos em uma pizzaria. O projeto foi desenvolvido para praticar os principais conceitos de **React**, **requisições HTTP**, **gestão de estado**, **componentização**, **testes com Vitest** e muito mais. A aplicação conta com autenticação, dashboard administrativo com métricas, listagem de pedidos e modais com informações detalhadas.

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React** – Biblioteca para construção de interfaces reativas.
- ⚡ **Vite** – Ferramenta moderna e rápida de build.
- 🟦 **TypeScript** – Superset do JavaScript com tipagem estática.
- 🟢 **Node.js** – Ambiente de execução para JavaScript no backend.
- 🧩 **radix-ui** – Componentes acessíveis e sem estilos.
- 💅 **shadcn/ui** – Coleção de componentes baseada em radix-ui com estilo moderno.
- 🎨 **TailwindCSS** – Framework utilitário para estilos rápidos e responsivos.
- 📋 **React Hook Form** – Biblioteca para manipulação de formulários com foco em performance.
- 💎 **Zod** – Validação de esquemas com integração ao Hook Form.
- 🔁 **React Router DOM** – Controle de navegação e rotas da aplicação.
- 🔄 **@tanstack/react-query** – Gerenciamento de cache, requisições e estado do servidor.
- 🔌 **Axios** – Cliente HTTP baseado em Promises.
- 📅 **date-fns** – Funções utilitárias para manipulação de datas.
- 🧠 **lucide-react** – Ícones modernos em SVG para React.
- 📆 **react-day-picker** – Componente para seleção de datas.
- 🔖 **react-helmet-async** – Gerenciamento de metadados para SEO e head.
- 📊 **Recharts** – Biblioteca para construção de gráficos com base em componentes.
- 🔔 **sonner** – Sistema leve de notificações toast.
- 🧪 **Vitest** – Framework de testes rápido com suporte ao Vite.
- 🧪 **@playwright/test** – Testes end-to-end com suporte moderno a browsers.
- 🧪 **@testing-library** – Conjunto de ferramentas para testes baseados em comportamento do usuário.
- 🖥️ **happy-dom** – Ambiente simulado de DOM para testes fora do browser.
- 🧪 **msw (Mock Service Worker)** – Interceptação e mock de APIs para testes.
- 🧹 **ESLint** – Linter para manter a qualidade e consistência do código.

## ⚙️ Funcionalidades

- 🔐 **Autenticação**:
  - Criação de conta e login seguro.
  - Validação de formulário e tratamento de erros.

- 📊 **Dashboard Administrativo**:
  - Métricas visuais e gráficos sobre os pedidos.
  - Resumo de status: pendentes, em preparo, entregues, etc.

- 🧾 **Gerenciamento de Pedidos**:
  - Listagem com paginação e filtros por status.
  - Modal com detalhes do pedido (itens, cliente, horário, status).
  - Acompanhamento de pedidos em tempo real.

## 🧠 Conceitos Aplicados

- Requisições assíncronas com **React Query**
- Gerenciamento de rotas com **React Router**
- Formulários reativos e validados com **React Hook Form** e **Zod**
- Estilização moderna com **TailwindCSS** e **shadcn/ui**
- Testes com **Vitest**, **Testing Library**, **Playwright** e dados mockados com **MSW**
- Componentização reutilizável com boas práticas

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos

- 🟩 [Node.js 20+](https://nodejs.org/)
- 📦 [pnpm 8+](https://pnpm.io/)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/pizzashop-web.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd pizzashop-web
    ```

3. Instale as dependências:

    ```bash
    pnpm install
    ```

4. Configure as variáveis de ambiente:

  - Para o ambiente de desenvolvimento com API real:
  
    ```bash
    cp .env.local.example .env.local
    ```

  - Para o ambiente de teste com dados mockados:

    ```bash
    cp .env.test.example .env.test
    ```

### ▶️ Execução

Execute a aplicação localmente no modo de desenvolvimento:

```bash
pnpm run dev
```

A aplicação estará disponível em: [http://localhost:5173](http://localhost:5173)

### 🧪 Modo Teste

Execute a aplicação no modo de teste, com dados mockados:

```bash
pnpm run dev:test
```

A aplicação estará disponível em: [http://localhost:5174](http://localhost:5174)

## 🔗 Integração com a API

Para o funcionamento completo da aplicação, é necessário rodar a API do **pizza.shop** localmente.

Você pode acessar o repositório da API no GitHub:

👉 [https://github.com/joschonarth/pizzashop-api](https://github.com/joschonarth/pizzashop-api)

Siga as instruções no README da API para configurá-la e iniciá-la localmente antes de rodar o frontend.

## 🧪 Testes

Este projeto possui testes **unitários** e **end-to-end (E2E)**, utilizando ferramentas modernas e focadas na experiência real do usuário.

### ✅ Testes Unitários

Foi utilizado o **Vitest** como framework principal de testes, com suporte da **Testing Library** e do **happy-dom** para simulação do DOM em ambiente de teste.

- `Vitest`: Execução rápida e integrada ao Vite.
- `Testing Library`: Foco em testes baseados no comportamento real do usuário.
- `happy-dom`: DOM virtual para simular ambiente de browser em testes.

#### ▶️ Comando para rodar

```bash
pnpm run test
```

### ✅ Testes End-to-End (E2E)

Para os testes E2E, foi utilizado o **Playwright**, que permite simular interações completas do usuário com a aplicação em diferentes navegadores.

- `Playwright`: Testes robustos em múltiplos navegadores com suporte a headless e modo interativo.
- `MSW (Mock Service Worker)`: Simulação de APIs durante testes E2E.

#### ▶️ Comando via terminal

```bash
pnpm playwright test
```

#### ▶️ Comando via UI (modo visual)

```bash
pnpm playwright test --ui
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias ou correções. 💡

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub!

## 📞 Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joschonarth/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)
