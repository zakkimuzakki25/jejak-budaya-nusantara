import React from 'react';
import './BubbleChat.css'; // Ubah nama file sesuai kebutuhan Anda

const BubbleChat = ({ message, setBubbleChat, handleClick, zIndex }) => {
  const clickHandle = () => {
    setBubbleChat(false);
    handleClick();
  };

  return (
    <div
      onClick={clickHandle}
      className="overlay"
      style={{ zIndex: `${zIndex}` }}
    >
      <div className="bubble">
        <div>{message}</div>
      </div>

      <div className="instruction">klik mana saja untuk keluar</div>
    </div>
  );
};

export default BubbleChat;
