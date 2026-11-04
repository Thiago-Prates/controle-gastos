# React + Vite

## Gastos salvos no navegador

O app salva automaticamente a lista completa na chave `controle-gastos` do
localStorage, inclusive os gastos ocultos pelo filtro. Ao recarregar, recupera a
lista e recalcula o total; o filtro volta para Todas.

Os dados ficam neste navegador e perfil, separados por origem (protocolo,
domínio e porta), sem sincronização entre dispositivos. Limpar os dados do site
apaga os gastos. Falhas de leitura ou gravação são exibidas na página. Se os dados
salvos estiverem inválidos, o app não os sobrescreve e avisa que novas alterações
não serão salvas.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
