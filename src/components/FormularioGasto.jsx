function FormularioGasto() {
  return (
    <form className="formulario">
      <label htmlFor="descricao">Descrição</label>
      <input
        id="descricao"
        name="descricao"
        type="text"
        placeholder="Ex.: almoço"
      />

      <label htmlFor="valor">Valor</label>
      <div className="campo-valor">
        <span aria-hidden="true">R$</span>
        <input
          id="valor"
          name="valor"
          type="number"
          min="0"
          step="0.01"
          placeholder="0,00"
        />
      </div>

      <label htmlFor="categoria">Categoria</label>
      <select id="categoria" name="categoria" defaultValue="">
        <option value="" disabled>Selecione uma categoria</option>
        <option value="alimentacao">Alimentação</option>
        <option value="transporte">Transporte</option>
        <option value="lazer">Lazer</option>
        <option value="outros">Outros</option>
      </select>

      <button type="button" className="botao-adicionar">Adicionar gasto</button>
    </form>
  )
}

export default FormularioGasto
