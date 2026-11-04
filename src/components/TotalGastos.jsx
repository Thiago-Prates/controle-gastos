function TotalGastos({ totalCentavos }) {
  const totalFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalCentavos / 100)

  return (
    <section className="cartao cartao-total" aria-labelledby="titulo-total">
      <div>
        <p className="rotulo-total" id="titulo-total">Total de gastos</p>
        <p className="ajuda-total">Soma de todas as despesas</p>
      </div>
      <p className="valor-total" aria-live="polite">{totalFormatado}</p>
    </section>
  )
}

export default TotalGastos
