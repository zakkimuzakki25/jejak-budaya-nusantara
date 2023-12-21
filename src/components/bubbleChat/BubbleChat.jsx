import React from 'react';
import './BubbleChat.css'; // Ubah nama file sesuai kebutuhan Anda

const BubbleChat = ({ message, setBubbleChat, handleClick, zIndex, isTutorial }) => {
  const clickHandle = () => {
    setBubbleChat(false);
    handleClick();
  };

  return (
    <div
      onClick={clickHandle}
      className={`overlay ${isTutorial ? 'tutorial' : ''}`}
      style={{ zIndex: `${zIndex}` }}
    >
      <div className={`${isTutorial ? 'bubble-tutorial' : 'bubble'}`}>
        <div>{message}</div>
      </div>

      {isTutorial && (
        <div className="instruction">klik mana saja untuk keluar</div>
      )}
    </div>
  );
};

export default BubbleChat;
