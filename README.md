# 🌱 BraTech — Gamificação Sustentável

Projeto acadêmico desenvolvido para o **Challenge 2026 da FIAP**, turma **1TDSR**, com o objetivo de incentivar práticas sustentáveis por meio de desafios, pontos e acompanhamento do progresso. A proposta é estimular a comunidade **SoulUp** a adotar hábitos mais conscientes no dia a dia.

O Front-End foi desenvolvido como uma **Single Page Application (SPA)** utilizando React, TypeScript e Vite. Na Sprint 4, o projeto recebeu uma camada de integração com uma **API REST em Java**, responsável pelo cadastro e gerenciamento das ações sustentáveis.

## 🔗 Links do projeto

| Recurso | Link |
| --- | --- |
| Aplicação publicada (Vercel) | [Acessar BraTech](https://gamificacao-bra-tech.vercel.app/) |
| Repositório do Front-End | [GitHub — Gamificacao-BraTech](https://github.com/MatheusQuintasdev/Gamificacao-BraTech) |
| API Java (endpoint de ações) | [Render — `/api/acoes`](https://megafarma-api-kzze.onrender.com/api/acoes) |
| Vídeo de apresentação | [Assistir no YouTube](https://youtu.be/0eNU3Pf3Mik) |

> **Observação:** os endereços são os disponibilizados pela equipe. A integração está implementada no código, mas a disponibilidade dos serviços e o funcionamento das operações em produção devem ser validados no ambiente publicado.

## 🎯 Sobre a solução

A BraTech propõe uma experiência de gamificação voltada à sustentabilidade. O usuário pode visualizar desafios e ações sustentáveis, marcar atividades como concluídas e acompanhar a quantidade de pontos acumulados.

O sistema também possui um painel de gerenciamento das ações, com operações de consulta, cadastro, edição e exclusão por meio da API Java, além de páginas institucionais e uma apresentação dos integrantes.

## ⚙️ Tecnologias utilizadas

**Front-End**
- React 18
- TypeScript
- Vite 5
- React Router DOM
- React Hook Form
- Tailwind CSS
- HTML5 e CSS3

**Integração e publicação**
- API REST em Java, disponibilizada no Render
- Fetch API para requisições HTTP e comunicação em JSON
- Vercel para o deploy do Front-End
- Git e GitHub para versionamento

## 🧩 Funcionalidades e páginas

| Página | Rota | Descrição |
| --- | --- | --- |
| Início | `/` | Apresentação da BraTech e acesso às demais páginas |
| Sobre | `/sobre` | Contexto e proposta do projeto |
| Gamificação | `/gamificacao` | Ações sustentáveis, marcação de conclusão e cálculo dos pontos |
| Painel de ações | `/painel-acoes` | Listagem, cadastro, edição e exclusão das ações via API |
| Avatar | `/avatar` | Protótipo de experiência com avatar |
| FAQ | `/faq` | Perguntas frequentes |
| Contato | `/contato` | Formulário de contato com validação |
| Integrantes | `/integrantes` | Apresentação da equipe |
| Perfil do integrante | `/integrantes/:id` | Rota dinâmica com informações de cada integrante |
| Não encontrada | `*` | Página exibida para rotas inexistentes |

O acompanhamento de ações concluídas utiliza **Context API e `localStorage`**. Essa informação fica no navegador do usuário e **não é gravada pela API Java**.

## 📁 Estrutura de pastas

```text
Gamificacao-BraTech/
├── public/
│   └── integrantes/           # Fotos dos integrantes
├── src/
│   ├── components/            # Header, Footer, AcaoCard, AcaoForm e outros
│   ├── context/               # Contexto de ações concluídas
│   ├── data/                  # Catálogo local e dados da equipe
│   ├── hooks/                 # useAcoes: carregamento e operações CRUD
│   ├── pages/                 # Páginas e rotas da aplicação
│   ├── services/              # acoesApi.ts: comunicação HTTP com a API
│   ├── types/                 # Interfaces TypeScript
│   ├── App.tsx                # Configuração das rotas
│   ├── main.tsx               # Entrada da aplicação
│   ├── index.css              # Estilos globais
│   └── vite-env.d.ts          # Tipos das variáveis do Vite
├── .env.example               # Exemplo de variáveis de ambiente
├── INTEGRACAO_JAVA.md         # Orientações complementares da integração
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                 # Configuração de publicação
├── vite.config.ts
└── README.md
```

O repositório também conserva arquivos HTML/CSS/JavaScript de versões anteriores, além da aplicação atual em React na pasta `src/`.

## 💻 Como executar localmente

**Pré-requisito:** Node.js com npm instalado.

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusQuintasdev/Gamificacao-BraTech.git
   cd Gamificacao-BraTech
   ```

2. Instale as dependências:

   ```bash
   npm ci
   ```

3. Crie um arquivo `.env.local` na raiz do projeto com as variáveis de integração:

   ```env
   VITE_API_URL=https://megafarma-api-kzze.onrender.com
   VITE_API_ACOES_PATH=/api/acoes
   ```

   O endereço base deve ficar **sem** `/api/acoes` ao final, pois o caminho já está definido na segunda variável. Alternativamente, copie `.env.example` e atualize o endereço.

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a URL local mostrada no terminal (normalmente `http://localhost:5173`).

**Comandos adicionais**

```bash
npm run build     # Verifica TypeScript e gera a versão de produção em dist/
npm run preview   # Abre uma prévia local da versão gerada
```

Sem `VITE_API_URL`, a aplicação utiliza ações locais de demonstração. Nesse modo, as operações de cadastro, edição e exclusão pela API ficam indisponíveis.

## 🔌 Integração com a API Java

**Endpoint publicado:** `https://megafarma-api-kzze.onrender.com/api/acoes`

O serviço Front-End (`src/services/acoesApi.ts`) utiliza requisições HTTP para as seguintes operações:

| Método | Endpoint | Finalidade |
| --- | --- | --- |
| GET | `/api/acoes` | Listar ações sustentáveis |
| POST | `/api/acoes` | Cadastrar uma ação |
| PUT | `/api/acoes/{id}` | Atualizar uma ação pelo ID |
| DELETE | `/api/acoes/{id}` | Excluir uma ação pelo ID |

### Contrato de dados

O Front-End trabalha com o seguinte formato de ação sustentável:

```json
{
  "id": 1,
  "titulo": "Separar recicláveis",
  "descricao": "Separar os resíduos recicláveis para descarte adequado.",
  "pontos": 40,
  "categoria": "Reciclagem"
}
```

Os valores acima são **ilustrativos**. Para cadastro e atualização, o Front-End envia `titulo`, `descricao`, `pontos` e `categoria`; o `id` é utilizado para identificar registros existentes.

A URL base é definida por `VITE_API_URL`, e a rota, por `VITE_API_ACOES_PATH`. O hook `src/hooks/useAcoes.ts` controla carregamento, erros e operações CRUD. O painel (`/painel-acoes`) utiliza essas funções para gerenciar os registros.

### Limitações conhecidas

- Na versão Java recebida, os registros são **mantidos em memória**: reiniciar o servidor pode restaurar os dados iniciais e descartar alterações realizadas.
- A conclusão individual de desafios e a pontuação do usuário são controladas localmente no navegador, não persistidas no backend.
- Como o CRUD da API não possui autenticação na versão analisada, ele deve ser usado com dados de demonstração e não para armazenar informações sensíveis.
- O funcionamento completo de GET, POST, PUT e DELETE no site publicado depende da disponibilidade do serviço no Render e da configuração de acesso entre os domínios (CORS).

## ☁️ Deploy

O **Front-End** está publicado na [Vercel](https://gamificacao-bra-tech.vercel.app/) e o endpoint da **API Java** foi disponibilizado no [Render](https://megafarma-api-kzze.onrender.com/api/acoes).

Na Vercel, em **Project → Settings → Environment Variables**, configure no ambiente **Production**:

| Variável | Valor |
| --- | --- |
| `VITE_API_URL` | `https://megafarma-api-kzze.onrender.com` |
| `VITE_API_ACOES_PATH` | `/api/acoes` |

Após cadastrar ou alterar essas variáveis, é necessário fazer um **novo deploy**, pois o Vite as utiliza durante a compilação. Variáveis que começam com `VITE_` ficam acessíveis no navegador, portanto não devem conter senhas nem segredos.

## ✅ Testes recomendados

1. Executar `npm run build` e conferir a compilação.
2. Abrir `/gamificacao` e verificar o carregamento das ações.
3. Marcar uma ação como concluída e verificar os pontos e a persistência local após atualizar a página.
4. Abrir `/painel-acoes` e testar listagem, cadastro, edição e exclusão com dados de demonstração.
5. Verificar as páginas no celular e no desktop.
6. Validar o site publicado, incluindo eventuais erros de rede ou CORS no console do navegador.

## 👥 Integrantes e créditos

**FIAP — Turma 1TDSR**

| Integrante | Registro acadêmico |
| --- | --- |
| Lucas José Paolillo Vasconcelos | RM 565561 |
| Thiago Dias Gomes | RM 569675 |
| Matheus Nogueira Quintas | RM 572542 |
| João Arthur Maia | RM 573458 |
| Guilherme Ribeiro | RM 573890 |

As fotos dos integrantes estão em `public/integrantes/`, e suas informações aparecem na página de integrantes do projeto.

## 🎥 Vídeo de apresentação

Assista à [apresentação da BraTech no YouTube](https://youtu.be/0eNU3Pf3Mik).

---

**Projeto acadêmico — FIAP | Challenge 2026 | Sprint 4**
