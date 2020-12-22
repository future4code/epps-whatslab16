import React from 'react';
import styled from 'styled-components';
// import {MessageWindow} from './components/MessageWindow';


const MessageWindowContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 600px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
`

const TextContainer = styled.div`
  margin-top: 500px;
  padding: 10px;
`

const InputContainer = styled.div`
  margin-top: 660px;
`


class App extends React.Component {
  render () {
      const janelaMensagem = [
  
        {
          usuario: '',
          mensagem: '',
          
        }
  
      ] 
      
    return (
      <MessageWindowContainer>
        <TextContainer>
        {janelaMensagem.map((texto) => {
        return <p>
          {texto.usuario}: {texto.mensagem}
        </p>
       })}  
        </TextContainer> 
        <InputContainer>
          <input id="nameUser" placeholder={"Usuário"}
          type="text"
          />
          <input id="textMessage" placeholder={"Mensagem"}
          type="text"
          />
          <button>Enviar</button>
        </InputContainer>
      </MessageWindowContainer>
    );
    
    
  }
}

export default App;



