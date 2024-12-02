
# Pizzashop Web

**Pizzashop Web** é uma aplicação web desenvolvida para gerenciar pedidos de um estabelecimento comercial. A aplicação permite acompanhar pedidos em tempo real, realizar ações sobre eles, obter insights financeiros e personalizar informações do estabelecimento.

### 🌐 API
Este projeto utiliza a API disponível no repositório: [Pizzashop API](https://github.com/rocketseat-education/pizzashop-api).

---

## 🎯 **Funcionalidades**

### 🖥️ Painel de Login
- Autenticação com email.
- É possivel cadastrar um email em "Novo Estabelecimento".

### 🏢 Registro de Estabelecimento
- Cadastro de novos estabelecimentos.
- Gerenciamento dos dados da loja.

### 📊 Dashboard
- **Receita total:** acompanha os ganhos acumulados.
- **Pedidos no mês:** total de pedidos realizados no mês corrente.
- **Pedidos no dia:** total de pedidos do dia.
- **Cancelamentos no mês:** número de cancelamentos registrados no mês.
- **Receita por período:** análise personalizada.
- **Produtos populares:** produtos mais vendidos.

### 📜 Pedidos
- Tabela de pedidos com as informações:
  - ID do pedido.
  - Tempo desde a realização do pedido.
  - Status.
  - Nome do cliente.
  - Total do pedido.
  - Botões de ação (aprovar, atualizar status de entrega, cancelar).
- **Filtros:** pesquisa por ID, cliente e status.
- **Paginação:** organização eficiente em páginas.

### 🛠️ Configurações
- Personalização do nome e descrição da loja.
- Alternância entre modo claro e modo escuro.

### 🧪 Testes
- **Testes unitários:** realizados com `vitest`.
- **Testes end-to-end:** configurados com `Playwright`.

---

## 🛠️ **Tecnologias Utilizadas**

### 📦 Frontend
- **[React](https://react.dev/):** Biblioteca para construção de interfaces.
- **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas.
- **[React Hook Form](https://react-hook-form.com/):** Gerenciamento de formulários.
- **[Recharts](https://recharts.org/):** Gráficos e visualizações de dados.
- **[Radix UI](https://www.radix-ui.com/):** Componentes acessíveis.

### 🎨 Estilo
- **[TailwindCSS](https://tailwindcss.com/):** Framework de estilização.
- **[Prettier Plugin TailwindCSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss):** Organização automática das classes CSS.
- **[tailwindcss-animate](https://tailwindcss-animate.dev/):** Animações simples com Tailwind.

### 📡 API e Gerenciamento de Dados
- **[Axios](https://axios-http.com/):** Consumo de APIs.
- **[TanStack Query](https://tanstack.com/query/v5):** Gerenciamento de dados do cliente.
- **[Zod](https://zod.dev/):** Validação de dados.
- **[date-fns](https://date-fns.org/):** Manipulação de datas.

### ⚙️ Testes e Qualidade
- **[Vitest](https://vitest.dev/):** Testes unitários.
- **[Testing Library](https://testing-library.com/):** Testes de componentes React.
- **[Playwright](https://playwright.dev/):** Testes end-to-end.
- **[MSW](https://mswjs.io/):** Mock de APIs.
- **[ESLint](https://eslint.org/):** Linter para identificar problemas no código.
- **[Prettier](https://prettier.io/):** Formatação consistente do código.

### 🔧 Build e Ferramentas
- **[Vite](https://vitejs.dev/):** Ferramenta de build rápida e moderna.
- **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript para tipagem estática.

### 💾 Armazenamento Local
- **[LocalForage](https://localforage.github.io/localForage/):** Armazenamento offline otimizado.

---

## 🚀 **Instalação e Uso**

### Pré-requisitos
- **Node.js** (versão recomendada: 18.0+).
- **npm** ou **yarn** para gerenciamento de pacotes.

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/saramargarido/pizzashop-web.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd pizzashop-web
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra o navegador em [http://localhost:5173](http://localhost:5173).

---

## 🛠️ **Comandos Disponíveis**

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera o build de produção.
- `npm run preview`: Visualiza o build gerado.
- `npm run lint`: Executa o linter para verificar o código.
- `npm run test`: Executa os testes.

---

## 📂 **Estrutura do Projeto**
```
pizzashop-web
├── src
│   ├── api
│   ├── assets
│   ├── components
│   ├── lib
│   ├── pages
├── public
├── test
└── test-results
```
Desenvolvido com ❤️ por **Sara Margarido**.
