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
Resposta: Deu R$ 0,30, ao adicionar 0,10 e depois 0,20. O total é atualizado, somando os valores em centavos inteiros.
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: As aproximações fazem 0.1 + 0.2 resultar em 0.30000000000000004; somar centavos inteiros evita esse problema nos cálculos monetários usuais.

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: Ele apenas alterou cmo solicitado, nenhuma lógica ou funcionalidade extra foi alterada.
M3.2 Como o código sabe qual gasto remover?
Resposta: Cada botão envia o id único do seu gasto à função removerGasto. Ela usa filter para manter apenas os gastos com id diferente. No teste com três gastos de R$ 10,00, R$ 20,00 e R$ 30,00, removi o do meio e foi mantido o primeiro e o último, com total de R$ 40,00.

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: "Planeje um filtro por categoria acima da lista de gastos, com as opções Todas, Alimentação, Transporte, Lazer e Outros. Inicie em Todas e mostre apenas os gastos da categoria selecionada, sem apagar o restante. Devem ser considerarado somente os gastos visíveis. Adicionar e remover gastos deve respeitar o filtro ativo. Mantenha a coerencia e o estilo visual atual."
M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: A tentativa B ficou melhor porque definiu posição, opções, comportamentos e outros. A tentativa A deixou essas decisões em aberto. Dessa maneira especificando nós garantimos a coerencia com a expectativa que temos sobre o filtro em si, diferente de deixar aberto para a escolha dele.

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta: No armazenamento local do perfil do navegador, porém em apenas um dispositivo, separado por origem do site. Os dados ficam como texto e normalmente persistem após recarregar ou fechar o navegador, até serem apagados.
B.2 Por que os gastos não aparecem em outro navegador?
Resposta: Cada navegador e perfil possui seu próprio armazenamento. O localStorage não sincroniza os gastos entre navegadores ou dispositivos.

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta: A lista recebe os gastos do componente principal por propriedades e mostra cada item. Ao clicar em Remover, ela chama uma função passando o id do gasto. O componente atualiza o estado, e a lista e o total refletem a mudança.
R.2 Em que momento você aceitou algo sem entender?
Resposta: Sinceramente fui validando tudo em cada etapa da missão, então ele gerava e eu revisava o que foi feito, acredito que entendi bem o funcionamento implementado.
R.3 Quais decisões foram suas e quais foram do agente?
Resposta: Eu defini as regras do projeto e os requisitos das missões. O agente escolheu os detalhes técnicos e planejou, por fim eu também fiquei responsável por validar e autorizar as implementações.
R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: Os requisitos, as regras do projeto e os critérios de teste continuariam valendo. Independentemente do modelo, eu precisaria dar instruções claras, revisar as decisões e conferir se o código está de acordo com o desejado.
