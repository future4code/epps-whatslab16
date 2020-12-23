import React from 'react';
import styled from 'styled-components';
import './App.css'
// import Background from './img/background.jpg';
// import {MessageWindow} from './components/MessageWindow';


const MessageWindowContainer = styled.div`
  background-color: #49b675;
  border: 1px solid black;
  height: 100vh;
  width: 38em;
  margin: auto;
  display: flex;
`

const TextContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 3em;
  display: flex;
  align-items: flex-start;
  align-self: stretch;
`

const InputContainer = styled.div`
  margin-top: 40.5em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: fixed;
  bottom: 0;
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
      <MessageWindowContainer
      // background={Background}
      >
    
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
          <button class="botao" class="botao-bio" onClick={this.adicionaMensagem}>Enviar</button>
        </InputContainer>
        
      </MessageWindowContainer>
    );
    
    
  }
}

export default App;



