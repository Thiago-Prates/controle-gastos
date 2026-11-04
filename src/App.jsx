import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import './App.css'

function App() {
  const [gastos, setGastos] = useState([])
  const totalCentavos = gastos.reduce(
    (soma, gasto) => soma + Math.round(gasto.valor * 100),
    0,
  )

  function adicionarGasto(novoGasto) {
    setGastos((gastosAtuais) => [...gastosAtuais, novoGasto])
  }

  function removerGasto(id) {
    setGastos((gastosAtuais) => gastosAtuais.filter((gasto) => gasto.id !== id))
  }

  return (
    <main className="pagina">
      <header className="cabecalho">
        <p className="sobretitulo">Suas finanças, em ordem</p>
        <h1>Controle de gastos</h1>
        <p className="descricao">
          Acompanhe suas despesas e tenha mais clareza sobre seu dinheiro.
        </p>
      </header>

      <div className="painel">
        <section className="cartao formulario-cartao" aria-labelledby="titulo-formulario">
          <div className="titulo-secao">
            <span className="icone-secao" aria-hidden="true">＋</span>
            <div>
              <h2 id="titulo-formulario">Novo gasto</h2>
              <p>Registre uma despesa</p>
            </div>
          </div>
          <FormularioGasto aoAdicionar={adicionarGasto} />
        </section>

        <section className="cartao lista-cartao" aria-labelledby="titulo-lista">
          <div className="titulo-secao titulo-lista">
            <div>
              <h2 id="titulo-lista">Seus gastos</h2>
              <p>Despesas registradas</p>
            </div>
            <span className="contador-gastos">
              {gastos.length} {gastos.length === 1 ? 'item' : 'itens'}
            </span>
          </div>
          <ListaGastos gastos={gastos} aoRemover={removerGasto} />
        </section>

        <TotalGastos totalCentavos={totalCentavos} />
      </div>
    </main>
  )
}

export default App
