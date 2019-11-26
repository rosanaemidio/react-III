import React, { Fragment } from 'react'
import Input from '../components/Input'
import Button from '../components/Button/Button'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            nomes:[
                "Joana",
                "Margarida",
                "Maria",
                "Flor"
            ]

        }
    }

     onChange= (element) =>{
      this.setState({value: element.target.value})
  
    }

    adicionaNome = () =>{
        this.setState({
            nomes: [
                ...this.state.nomes,
                this.state.value
            ]
        })
    }

    removeItem = (item) =>{
       let novoArray= this.state.nomes.filter(nome => (
                nome !== item 
            ))
            this.setState({
                nomes: novoArray
            })
    }

    render() {
        return (
            <Fragment>
                <Input type='text' placeholder='Digite o seu nome' change={this.onChange}></Input>
                {/* // <Input type='password' placeholder='Digite a sua senha'></Input>  */}
                <Button click={this.adicionaNome}> Batata </Button>
                    <ul>
                     {this.state.nomes.map((nome, i) => (
                         <Fragment key={i}>
                             <li >{nome}</li>
                             <Button click={() => this.removeItem(nome)}> x </Button>            
                         </Fragment>
                         ))} 
                    </ul>   
            </Fragment>
        );
    }
}
export default Home;