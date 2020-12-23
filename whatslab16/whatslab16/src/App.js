import React from 'react';
import styled from 'styled-components';
import './App.css'
// import {MessageWindow} from './components/MessageWindow';


const MessageWindowContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
<<<<<<< HEAD
  width: 650px;
=======
  width: 38em;
>>>>>>> 8872de02befc95580ab65a6697de0fd13d9aa410
  margin: auto;
  display: flex;
  
`

const TextContainer = styled.div`
<<<<<<< HEAD
  margin-top: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
=======
  margin-top: 37em;
>>>>>>> 8872de02befc95580ab65a6697de0fd13d9aa410
`

const InputContainer = styled.div`
  margin-top: 37.5em;
  margin-left: auto;
  margin-right: auto;
`

class App extends React.Component {
  state = {
    janelaMensagem: [],
    valorInputUsuario: '',
    valorInputMensagem: '',
  }

  onChangeInputUsuario = (e) =>{
    this.setState({valorInputUsuario: e.target.value});
  }
  
  onChangeInputMensagem = (e) =>{
    this.setState({valorInputMensagem: e.target.value});
  }

  adicionaMensagem = () => {
    const novaMensagem = {
        usuario: this.state.valorInputUsuario,
        mensagem: this.state.valorInputMensagem,
    }  

    const mensagemTela = [novaMensagem, ...this.state.janelaMensagem];
    this.setState({janelaMensagem: mensagemTela, valorInputUsuario: '', valorInputMensagem: ''});
   }


  render () {
    console.log(this.state.valorInputUsuario)
    console.log(this.state.valorInputMensagem)
      
    return (
      <MessageWindowContainer>
        <TextContainer>
          {this.state.janelaMensagem.map((texto) => {
            return <p>
              <strong>{texto.usuario}</strong>: {texto.mensagem}
            </p>
        })}
        </TextContainer> 
        <InputContainer>
          <input id="nameUser" onChange={this.onChangeInputUsuario} value={this.state.valorInputUsuario} placeholder={"Usuário"}
          type="text"
          />
          <input id="textMessage" onChange={this.onChangeInputMensagem} value={this.state.valorInputMensagem} placeholder={"Mensagem"}
          type="text"
          />
          <button onClick={this.adicionaMensagem}>Enviar</button>
        </InputContainer>
      </MessageWindowContainer>
    );
    
    
  }
}

export default App;



