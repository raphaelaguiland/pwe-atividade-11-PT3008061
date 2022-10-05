class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itens: [
      {Disciplina: "Sistemas Operacionais", Carga: 66.7, Periodo: "Noturno"},
      {Disciplina: "Inglês", Carga: 33.3, Periodo: "Noturno"},
      {Disciplina: "Laboratório de Estruturas de Dados e Programação", Carga: 66.7, Periodo: "Noturno"},
      {Disciplina: "Introdução a Banco de Dados", Carga: 66.7, Periodo: "Noturno"}
      ]
    }
  }

   renderTabelaCabecalho() {
     let cabecalho = Object.keys(this.state.itens[0]).splice(0, 3)
      return cabecalho.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
     })
  }
  
  renderTabelaDados() {
    return this.state.itens.map((item, index) => {
      const {
        Disciplina, Carga, Periodo 
      } = item
      return (
        <tr class="tabela-dados">
          <td>{Disciplina}</td>
          <td>{Carga}</td>
          <td>{Periodo}</td>
        </tr> 
      )
    })
  }

  render() {
    return (
      <div>
        <h2 class="titulo-tabela">Componentes Curriculares</h2>
        <table class="tabela">
          <tbody>
            <tr class="tabela-cabecalho">{this.renderTabelaCabecalho()}</tr>
            {this.renderTabelaDados()}
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<Table />, document.getElementById('tabela'));