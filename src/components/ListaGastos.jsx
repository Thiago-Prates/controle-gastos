function ListaGastos({ gastos, aoRemover, filtroAtivo }) {
  const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  if (gastos.length > 0) {
    return (
      <ul className="lista-itens">
        {gastos.map((gasto) => (
          <li className="item-gasto" key={gasto.id}>
            <div className="detalhes-gasto">
              <span className="icone-gasto" aria-hidden="true">↗</span>
              <div>
                <p className="descricao-gasto">{gasto.descricao}</p>
                <span className="categoria-gasto">{gasto.categoria || 'Sem categoria'}</span>
              </div>
            </div>
            <span className="valor-gasto">{formatadorMoeda.format(gasto.valor)}</span>
            <button
              type="button"
              className="botao-remover"
              aria-label={`Remover gasto: ${gasto.descricao}`}
              onClick={() => aoRemover(gasto.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="lista-vazia">
      <span className="icone-vazio" aria-hidden="true">↗</span>
      <p>{filtroAtivo ? 'Nenhum gasto nesta categoria' : 'Nenhum gasto por enquanto'}</p>
      <span>
        {filtroAtivo
          ? 'Selecione outra categoria ou adicione um gasto nesta categoria.'
          : 'Seus gastos adicionados aparecerão aqui.'}
      </span>
    </div>
  )
}

export default ListaGastos
