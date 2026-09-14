# 🌱 BraTech — Gamificação Sustentável

Projeto desenvolvido para o **Challenge 2026 da FIAP em parceria com a SoulUp**. A solução busca incentivar hábitos sustentáveis por meio de gamificação, desafios, pontuação e um protótipo de Avatar Sustentável.

## 🎯 Solução
A aplicação possui duas experiências principais: **Gamificação Sustentável**, em que ações concluídas somam pontos em tempo real, e **Avatar Sustentável**, um protótipo conversacional local com dicas eco-friendly. Nesta Sprint não há consumo de API.

## 🛠️ Tecnologias
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- React Hook Form
- Git e GitHub

## 📁 Estrutura
```text
src/
├── components/   # Header, Footer, Layout, botões e cards reutilizáveis
├── data/         # Dados locais da equipe e ações sustentáveis
├── pages/        # Home, Sobre, Soluções, FAQ, Contato e Integrantes
├── types/        # Interfaces e tipos TypeScript
├── App.tsx       # Rotas estáticas e dinâmica
├── main.tsx      # Inicialização React
└── index.css     # Diretivas Tailwind
```

## ✨ Recursos demonstrados
- SPA com React Router DOM
- Rota dinâmica `/integrantes/:id`
- `useState` em múltiplos componentes
- `useEffect` no Avatar e na gamificação
- `useNavigate` para navegação programática
- `useParams` no perfil de integrante
- Props em componentes reutilizáveis
- React Hook Form com validações e TypeScript
- Responsividade mobile, tablet e desktop com Tailwind

## 🚀 Como executar
```bash
npm install
npm run dev
```
Para validar a build de produção:
```bash
npm run build
```

## 🔗 Repositório
https://github.com/MatheusQuintasdev/Gamificacao-BraTech

## 🎥 Vídeo no YouTube
**PENDENTE:** inserir aqui o link público do vídeo do projeto antes da entrega.

## 🖼️ Imagens e ícones do projeto
Os registros visuais das versões anteriores estão em `public/images/`. Antes da entrega final, incluir também as **fotos reais de todos os integrantes**, pois elas fazem parte da identificação exigida na rubrica.

## 👥 Integrantes — 1TDSR
| Integrante | RM | GitHub | LinkedIn |
|---|---:|---|---|
| João Arthur Maia Almeida | 573458 | https://github.com/arthurmaia07 | https://www.linkedin.com/in/jo%C3%A3o-arthur-maia-almeida-927358401/ |
| Matheus Nogueira Quintas | 572542 | https://github.com/MatheusQuintasdev | https://www.linkedin.com/in/matheus-quintass |
| Guilherme Ribeiro Matias | 573890 | https://github.com/GuilhermeRibeiroMatias | https://www.linkedin.com/in/guilherme-ribeiro-matias-030385349/ |
| Lucas José Paolillo Vasconcelos | 565561 | https://github.com/lucas-duy | **PENDENTE: inserir URL correta do perfil** |
| Thiago Dias Gomes | 569675 | https://github.com/douxz1 | https://www.linkedin.com/in/thiago-dias-a53429315/ |

## 📬 Contato
O contato com a equipe pode ser feito pelos perfis de GitHub e LinkedIn listados acima. A página `/contato` demonstra captura e validação local de formulário com React Hook Form, sem backend/API nesta Sprint.

## 🤖 Registro de uso de IA
Ferramentas de IA foram utilizadas como apoio na migração da estrutura HTML/CSS/JavaScript para React + Vite + TypeScript, revisão de componentização, organização de rotas e documentação. O grupo deve revisar e compreender o código antes da entrega e registrar, na documentação exigida pelas demais disciplinas, os prompts, adaptações e aprendizados quando solicitado.
