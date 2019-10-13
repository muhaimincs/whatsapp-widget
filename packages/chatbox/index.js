import React from "react";
import Header from "./header";
import Footer from "./footer";
import Conversation from "./conversation";

function Chatbox() {
  return (
    <>
      <div className="chatbox">
        <Header />
        <Conversation />
        <Footer />
      </div>
      <style jsx>
        {`
          .chatbox {
            width: 360px;
            box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
}

export default Chatbox;
