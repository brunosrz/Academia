# Academia

Fundação de três projetos para uma academia. Este repositório contém apenas o bootstrap: não há autenticação, dados reais, cadastro ou serviços de produção implementados.

## Projetos

- **API** (`apps/api`): Rust e Cloudflare Workers, com `GET /health`. O domínio de negócio deve permanecer independente do runtime para permitir uma futura adaptação a VPS; isso ainda não é uma implementação para VPS.
- **Gestão** (`apps/gestao`): app para equipe administrar alunos, planos, matrículas, pagamentos, frequência e indicadores. Funcionalidades propostas para planejamento.
- **Aluno** (`apps/aluno`): app para acompanhar treinos, horários, matrícula, pagamentos e avisos. Conteúdo proposto sujeito a validação com usuários.

## Stack

Os dois apps usam Vue 3, TypeScript, Vite, Cloudflare Vite Plugin e Workers Assets, Vue Router, Pinia, TanStack Vue Query e Dexie. Dexie prepara armazenamento IndexedDB; sincronização offline, PWA, permissões e proteção de dados ainda precisam ser projetadas e implementadas. A API usa o template oficial workers-rs e compila para WebAssembly.

## Requisitos

Node.js 22.12 ou superior, pnpm 12.11.2, Rust estável, alvo `wasm32-unknown-unknown`, `worker-build` 0.8 e pre-commit. Instale as ferramentas Rust com:

```sh
rustup target add wasm32-unknown-unknown
cargo install worker-build --version '^0.8' --locked
```

## Desenvolvimento

```sh
pnpm install --frozen-lockfile
pnpm dev:gestao
pnpm dev:aluno
pnpm dev:api
```

Os frontends usam portas 5173 e 5174; Wrangler inicia a API local. Configure eventual comunicação e autenticação antes de conectar dados. Não há recursos Cloudflare ou domínios provisionados.

## Qualidade

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
cargo fmt --manifest-path apps/api/Cargo.toml -- --check
cargo clippy --manifest-path apps/api/Cargo.toml --all-targets -- -D warnings
cargo test --manifest-path apps/api/Cargo.toml
pre-commit run --all-files
```

A CI verifica os projetos de forma independente. Não há deploy automático nem secrets configurados. Nunca versionar credenciais ou dados pessoais.

Referências: [Rust Workers](https://developers.cloudflare.com/workers/languages/rust/), [Vue no Cloudflare](https://developers.cloudflare.com/workers/framework-guides/web-apps/vue/) e [proposta da stack Vue](https://github.com/brunosrz/Sabores-da-Canastra/issues/25).
