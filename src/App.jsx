import { useEffect, useState } from 'react'
import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import './App.css'

function carregarGastos() {
  try {
    const dadosSalvos = localStorage.getItem('controle-gastos')
    if (dadosSalvos === null) return { gastos: [], erro: '' }

    const gastos = JSON.parse(dadosSalvos)
    const categorias = ['', 'Alimentação', 'Transporte', 'Lazer', 'Outros']
    if (
      !Array.isArray(gastos) ||
      !gastos.every((gasto) =>
        gasto !== null &&
        typeof gasto === 'object' &&
        typeof gasto.id === 'string' &&
        gasto.id.trim() !== '' &&
        typeof gasto.descricao === 'string' &&
        gasto.descricao.trim() !== '' &&
        Number.isFinite(gasto.valor) &&
        gasto.valor > 0 &&
        categorias.includes(gasto.categoria),
      ) ||
      new Set(gastos.map((gasto) => gasto.id)).size !== gastos.length
    ) {
      return {
        gastos: [],
        erro: 'Os gastos salvos têm formato inválido. Os dados originais foram preservados; novas alterações não serão salvas.',
      }
    }

    return { gastos, erro: '' }
  } catch {
    return {
      gastos: [],
      erro: 'Não foi possível carregar os gastos salvos. O armazenamento pode estar indisponível ou conter dados corrompidos. Novas alterações não serão salvas.',
    }
  }
}

function App() {
  const [dadosIniciais] = useState(carregarGastos)
  const [gastos, setGastos] = useState(dadosIniciais.gastos)
  const [erroSalvamento, setErroSalvamento] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas')

  useEffect(() => {
    if (dadosIniciais.erro) return

    try {
      localStorage.setItem('controle-gastos', JSON.stringify(gastos))
      // eslint-disable-next-line react/set-state-in-effect -- Sincroniza o aviso com o resultado da gravação externa.
      setErroSalvamento('')
    } catch {
      setErroSalvamento('Não foi possível salvar os gastos neste navegador. As alterações atuais podem ser perdidas ao recarregar a página.')
    }
  }, [gastos, dadosIniciais.erro])

  const gastosFiltrados = categoriaSelecionada === 'Todas'
    ? gastos
    : gastos.filter((gasto) => gasto.categoria === categoriaSelecionada)
  const totalCentavos = gastosFiltrados.reduce(
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

      {(dadosIniciais.erro || erroSalvamento) && (
        <p className="mensagem-erro" role="alert">
          {dadosIniciais.erro || erroSalvamento}
        </p>
      )}

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
              {gastosFiltrados.length} {gastosFiltrados.length === 1 ? 'item' : 'itens'}
            </span>
          </div>
          <div className="filtro-categoria">
            <label htmlFor="filtro-categoria">Filtrar por categoria</label>
            <select
              id="filtro-categoria"
              value={categoriaSelecionada}
              onChange={(evento) => setCategoriaSelecionada(evento.target.value)}
            >
              <option value="Todas">Todas</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Transporte">Transporte</option>
              <option value="Lazer">Lazer</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <ListaGastos
            gastos={gastosFiltrados}
            aoRemover={removerGasto}
            filtroAtivo={categoriaSelecionada !== 'Todas'}
          />
        </section>

        <TotalGastos
          totalCentavos={totalCentavos}
          filtroAtivo={categoriaSelecionada !== 'Todas'}
        />
      </div>
    </main>
  )
}

export default App
