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