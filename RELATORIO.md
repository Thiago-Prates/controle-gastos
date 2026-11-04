# Relatório · Controle de Gastos

Nome:
Modelo usado:

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: O projeto é um app de controle de gastos feito com React e Vite; os componentes ficam em `src/components`, um por arquivo.
1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: - Responda e comente o código em português.
          - Use apenas React: não instale bibliotecas novas.
          - Use componentes de função e useState para o estado.
          - Use nomes de variáveis e componentes em português.
          - Mostre valores em reais, com duas casas: R$ 12,50.
          - Não crie nem edite o RELATORIO.md.

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta: Foi criado `src/components/FormularioGasto.jsx`, `src/components/ListaGastos.jsx` e `src/components/TotalGastos.jsx`; alterado `src/App.jsx`, `src/App.css` e `src/index.css`.
2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta: Ele separou os componentes em arquivos dentro de `src/components` e usou nomes em português. Ele também manteve a tela só com layout, sem estado ou lógica.

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: Aceita a vírgula para representar decimal, por exemplo `12,50` é convertido para 12,5 e exibido como `R$ 12,50`. Eu decidi isso passando a instrução para ele considerando o teste da missão.
M1.2 Quantas tool calls a missão usou?
Resposta: 15 chamadas de ferramenta, contando cada operação executada dentro das chamadas paralelas.

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta:
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta:

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta:
M3.2 Como o código sabe qual gasto remover?
Resposta:

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta:
M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta:

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta:
B.2 Por que os gastos não aparecem em outro navegador?
Resposta:

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta:
R.2 Em que momento você aceitou algo sem entender?
Resposta:
R.3 Quais decisões foram suas e quais foram do agente?
Resposta:
R.4 O que continuaria valendo se você trocasse o modelo?
Resposta:
