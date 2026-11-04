import { useState } from 'react'

function FormularioGasto({ aoAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState('')
  const [erro, setErro] = useState('')

  function enviarFormulario(evento) {
    evento.preventDefault()

    const descricaoLimpa = descricao.trim()
    const valorNormalizado = valor.trim().replace(',', '.')
    const valorNumerico = Number(valorNormalizado)
    const valorValido = /^\d+(?:[.,]\d{1,2})?$/.test(valor.trim())

    if (!descricaoLimpa) {
      setErro('Informe a descrição do gasto.')
      return
    }

    if (!valorValido || !Number.isFinite(valorNumerico) || valorNumerico <= 0) {
      setErro('Informe um valor maior que zero, com até duas casas decimais.')
      return
    }

    aoAdicionar({
      id: crypto.randomUUID(),
      descricao: descricaoLimpa,
      valor: valorNumerico,
      categoria,
    })
    setDescricao('')
    setValor('')
    setCategoria('')
    setErro('')
  }

  return (
    <form className="formulario" onSubmit={enviarFormulario} noValidate>
      <label htmlFor="descricao">Descrição</label>
      <input
        id="descricao"
        name="descricao"
        type="text"
        placeholder="Ex.: almoço"
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
        aria-invalid={Boolean(erro && !descricao.trim())}
      />

      <label htmlFor="valor">Valor</label>
      <div className="campo-valor">
        <span aria-hidden="true">R$</span>
        <input
          id="valor"
          name="valor"
          type="text"
          inputMode="decimal"
          placeholder="0,00"
          value={valor}
          onChange={(evento) => setValor(evento.target.value)}
          aria-invalid={Boolean(erro && valor)}
        />
      </div>

      <label htmlFor="categoria">Categoria</label>
      <select
        id="categoria"
        name="categoria"
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="" disabled>Selecione uma categoria</option>
        <option value="Alimentação">Alimentação</option>
        <option value="Transporte">Transporte</option>
        <option value="Lazer">Lazer</option>
        <option value="Outros">Outros</option>
      </select>

      {erro && <p className="mensagem-erro" role="alert">{erro}</p>}
      <button type="submit" className="botao-adicionar">Adicionar gasto</button>
    </form>
  )
}

export default FormularioGasto
