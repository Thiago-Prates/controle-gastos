function TotalGastos() {
  return (
    <section className="cartao cartao-total" aria-labelledby="titulo-total">
      <div>
        <p className="rotulo-total" id="titulo-total">Total de gastos</p>
        <p className="ajuda-total">Soma de todas as despesas</p>
      </div>
      <p className="valor-total">R$ 0,00</p>
    </section>
  )
}

export default TotalGastos
