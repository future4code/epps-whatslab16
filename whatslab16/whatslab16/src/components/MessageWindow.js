import React from 'react';

export const MessageWindow = () => {
    return <div className="main-container">
    <input id="nameUser" placeholder="Usuário"
    type="text"
    />
    <input id="textMessage" placeholder="Mensagem"
    type="text"
    />
    <button>Enviar</button>
  </div>
}

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
