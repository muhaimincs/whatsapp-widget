import React from "react";
import Whatsapp from "./icons/whatsapp";

function Launcher() {
  return (
    <>
      <div>
        <Whatsapp />
      </div>
      <style jsx>
        {`
          div {
            background-color: rgb(255, 255, 255);
            width: 60px;
            height: 60px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            user-select: none;
            position: relative;
          }
        `}
      </style>
    </>
  );
}

export default Launcher;
