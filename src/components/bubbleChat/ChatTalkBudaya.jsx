import { useState } from "react";
import { listChatMaskot } from "../../data/chatmaskot";
import BubbleChat from "./BubbleChat";
import maskotAwan from "/src/assets/maskots/MaskotMainSmileWithCloud.svg";

// eslint-disable-next-line react/prop-types
const ChatTalkBudaya = ({maskot}) => {
  const [isChatActive, setIsChatActive] = useState(false);
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * listChatMaskot.length)
  );

  const changeIndexHandle = () => {
    setRandomIndex(Math.floor(Math.random() * listChatMaskot.length));
    setIsChatActive(true);
  };
  return (
    <>
      {isChatActive ? (
      <>
        <BubbleChat
          message={listChatMaskot[randomIndex]}
          setBubbleChat={setIsChatActive}
          zIndex={99}
          isTutorial={false}
        />
        <img
          onClick={changeIndexHandle}
          className={`home-maskot ${isChatActive && "talk-random"} active`}
          src={maskotAwan}
          alt="maskot"
          style={{ cursor: "pointer" }}
        />
      </>
      ) : (
      <img
        className={`maskot-budaya ${isChatActive && "talk-random"}`}
        src={maskot}
        alt="maskot"
        onClick={changeIndexHandle}
        style={{ cursor: "pointer" }}
      />
      )}
    </>
  );
};

export default ChatTalkBudaya;
