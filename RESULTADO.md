# Resultado da auditoria de idioma e acessibilidade

## Constatação

A interface exibida está em português (por exemplo: “Controle de gastos”, “Descrição”, “Categoria”, “Adicionar gasto”, “Total de gastos”), mas `index.html` declarava o idioma do documento como `en`.

Essa divergência foi reproduzida no Chrome em `http://127.0.0.1:5173/`, com o MCP chrome-devtools, antes de qualquer alteração:

- `document.documentElement.lang` retornou `en`.
- O texto visível da página estava em português.
- Havia 1 item de teste criado na sessão inicial da auditoria: “Almoço teste MCP”, categoria Alimentação, `R$ 12,50`.

Captura: `prints/01-antes.png`.

## Correção

Arquivo alterado: `index.html:2`.

```diff
-<html lang="en">
+<html lang="pt-BR">
```

Nenhum outro arquivo de código foi alterado. `RELATORIO.md` não foi editado e nenhuma biblioteca foi adicionada ao projeto; as dependências existentes foram instaladas com `npm ci`.

## Resultados reais antes e depois

| Verificação | Antes | Depois |
| --- | --- | --- |
| `document.documentElement.lang` | `en` | `pt-BR` |
| Idioma do conteúdo visível | Português | Português |
| Coerência entre idioma declarado e conteúdo | Incorreta | Correta |
| Captura | `prints/01-antes.png` | `prints/02-depois.png` |

Após salvar a correção, a página foi recarregada no Chrome e uma nova avaliação no navegador retornou `document.documentElement.lang === "pt-BR"`.

## Testes realizados

1. Navegação para `http://127.0.0.1:5173/` no Chrome usando o MCP chrome-devtools.
2. Leitura de `document.documentElement.lang`, `document.title` e do texto visível de `document.body.innerText`.
3. Captura de tela completa da página antes da correção em `prints/01-antes.png`.
4. Edição de `index.html:2` de `en` para `pt-BR`.
5. Recarregamento da página e nova avaliação de `document.documentElement.lang`, com retorno `pt-BR`.
6. Captura de tela completa da página depois da correção em `prints/02-depois.png`.
7. Simulação de viewport móvel no Chrome: `390x844x2`, com `mobile` e `touch`.
8. Avaliação no navegador em viewport móvel: `window.innerWidth = 390`, `document.documentElement.clientWidth = 390` e `document.body.scrollWidth = 390`, sem overflow horizontal.
9. Captura de tela completa em viewport móvel em `prints/03-mobile.png`.
10. `npm run lint` (`oxlint`), executado com sucesso, sem erros reportados.
11. `npm run build`, executado com sucesso após a correção.

Não foi executada auditoria automatizada de acessibilidade com Lighthouse, axe ou ferramenta equivalente; a constatação e a confirmação foram feitas por inspeção do DOM e do conteúdo no Chrome. O gasto de teste permaneceu no perfil usado pelo Chrome DevTools.
