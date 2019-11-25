import React from 'react';
import Botao from './componentes/Botao';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
       num: 0

    }
  }
  tiraUm = () =>{
    this.setState((prevState)=>{
      return{
        num: prevState.num - 1
      }
    })
  }
  somaUm = ()=> {
    this.setState((prevState )=>{
        return{
          num:prevState.num + 1
        }
    })

  }
  render(){
    return (
      <div className="App">
  <Botao classe='btn'
    nome='+'
    onClick={this.somaUm}
  />
    <p>{this.state.num}</p>
  <Botao classe='btn-2'
    nome='-'
    onClick={this.tiraUm} 
  />
      
      </div>
    );
  }
}

export default App;
