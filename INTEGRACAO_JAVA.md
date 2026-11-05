# Integração BraTech + API EcoAções (Sprint 4)

A versão do Java recebida expõe `GET/POST/PUT/DELETE /api/acoes`. O frontend lê `VITE_API_URL` e `VITE_API_ACOES_PATH`, que são variáveis de build do Vite.

## Desenvolvimento local

1. Suba o Java com JDK 21 e Maven (`mvn spring-boot:run`) na pasta do backend.
2. Na raiz do frontend, crie `.env.local` usando `.env.example`, substituindo a URL por `http://localhost:8080`.
3. Rode `npm ci`, `npm run dev` e `npm run build`.
4. Abra `/painel-acoes`, teste listar, cadastrar, editar e excluir; depois abra `/gamificacao` e confira as ações.

## Vercel

Em Project Settings > Environment Variables, configure:

- `VITE_API_URL` = URL pública HTTPS do backend, sem barra final nem `/api/acoes`.
- `VITE_API_ACOES_PATH` = `/api/acoes`

Faça novo deploy após alterar as variáveis (elas são incorporadas ao build). A API Java precisa estar publicada e acessível. O controller atual possui `@CrossOrigin(origins = "*")`.

## Limitações

- A API atual mantém ações em memória. Reiniciar o servidor restaura as quatro ações de exemplo. **Não há banco de dados permanente**.
- Marcar ações concluídas permanece uma funcionalidade local do frontend (localStorage), não um endpoint Java.
- A API permite CRUD sem autenticação. Antes de expor dados reais na internet, recomendamos adicionar autenticação e restringir CORS.
- O domínio definitivo e a URL publicada da API não vieram nos anexos; o deploy integrado não pôde ser verificado aqui.
