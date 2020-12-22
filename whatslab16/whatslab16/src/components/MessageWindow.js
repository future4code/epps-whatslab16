import React from 'react';
import styled from 'style-components';

// export const MessageWindow = () => {
//     return <div className="main-container">
//     <input id="nameUser" placeholder="Usuário"
//     type="text"
//     />
//     <input id="textMessage" placeholder="Mensagem"
//     type="text"
//     />
//     <button>Enviar</button>
//   </div>
// }

// export default class App extends React.Component {
//   state = {
//     janelaMensagem: [

//       {
//         usuario: '',
//         mensagem: '',
        
//       }

//     ],    
  
//       valorInputUsuario: '',
//       valorInputMensagem: '',
  

//   };

//   adicionaMensagem = () => {

//     const novaMensagem = {
//     usuario: this.state.valorInputUsuario,
//     mensagem: this.state.valorInputMensagem,
    
//     };

//     const mensagemTela = [...this.state.janelaMensagem, novaMensagem];
//     this.setState({janelaMensagem: mensagemTela });
//     this.setState({valorInputUsuario: ''})
//     this.setState({valorInputMensagem: ''})
//    };   
   

//   onChangeInputUsuario = (e) =>{
//     this.setState({valorInputUsuario: e.target.value});
//   };
  
//   onChangeInputMensagem = (e) =>{
//     this.setState({valorInputMensagem: e.target.value});
//   };



// render() {
//   const mensagemCompleta = this.state.janelaMensagem.map((texto) =>{
//     return(
//       <p>
//         {texto.usuario} - {texto.mensagem} 
//       </p>
//     );
//   }); 

//   return (
//     <Container className="App">
      
//       <Titulo>Whatslab</Titulo>
      
//       <div>
//       <input 
            
//       value = {this.state.valorInputUsuario} 
//       onChange={this.onChangeInputUsuario}
//       placeholder = {"Usuário"}
//       />

//       <input 
//       value = {this.state.valorInputMensagem} 
//       onChange={this.onChangeInputMensagem} 
//       placeholder = {"Mensagem"} />
  

//       <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
//       </div>
      
//       <div>{mensagemCompleta}</div>
      
//     </Container>
//   )
// }
// }

// class JanelaMensagem extends React.Component {
//     state = {
//         janelaMensagem: [
//             {
//                 usuario: '',
//                 mensagem: ''
//             }
//         ],
//         valorInputUsuario: '',
//         valorInputMensagem: ''
//     }


//     adicionaMensagem = () => {
//         const novaMensagem = {
//             usuario: this.state.valorInputUsuario,
//             mensagem: this.state.valorInputMensagem
//         };

//         const novasMensagens = [... this.state.janelaMensagem, novaMensagem];
//         this.setState({janelaMensagem: novaMensagem});

//         onChangeInputUsuario = (e) => {
//             this.setState({valorInputUsuario: e.target.value});
//         };

//         onChangeInputMensagem = (e) => {
//             this.setState({valorInputMensagem: e.targe.value});
//         };
//     }
//         render() {
//             const listaMensagens = this.state.janelaMensagem.map((mensagem) => {
//                 return (
//                     <p> 
//                         {mensagem.usuario}
//                         {mensagem.mensagem}
//                     </p>
//                 );
//             });
//         };

//         return (
            
//         )
// };
