import { useState, useReducer, useEffect } from "react";
import useInterval from "../app/hooks/useInterval";
import TypingIndicator from "./typingIndicator";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return [...state, { ...action.data }];
    default:
      return state;
  }
};

function Conversation() {
  const [seconds, setSeconds] = useState(3000);
  const [messages, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window) {
      if (window.xprops) {
        setUser(window.xprops.chatHeader);
      }
    }
  }, []);

  useInterval(() => {
    if (window) {
      if (window.xprops) {
        dispatch({
          type: "load",
          data: window.xprops.welcomeMessage
        });
        setSeconds(null);
      }
    }
  }, seconds);

  return (
    <>
      <div className="conversation">
        {seconds && user && (
          <div className="message">
            <div className="tail"></div>
            <div className="message-content">
              <div className="author">{user.name}</div>
              <div className="text-block">
                <TypingIndicator />
              </div>
            </div>
          </div>
        )}
        {messages.map(message => (
          <div className="message" key={message.timestamp}>
            <div className="tail"></div>
            <div className="message-content">
              <div className="author">{message.author}</div>
              <div
                className="text-block"
                dangerouslySetInnerHTML={{
                  __html: message.message
                }}
              />
              <div className="timestamp">{message.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .conversation {
            background-color: rgb(230, 221, 212);
            padding: 20px 20px 20px 10px;
            position: relative;
          }
          .conversation:before {
            background-image: url(/img/whatsapp.webp);
            display: block;
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            z-index: 0;
            opacity: 0.08;
          }
          .message {
            display: flex;
            z-index: 1;
          }
          .tail {
            background-color: #fff;
            width: 52.5px;
            height: 32px;
            border-radius: 16px;
            display: -webkit-flex;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            opacity: 0;
            transition: 0.1s ease all;
            z-index: 1;
            box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
          }
          .message-content {
            padding: 7px 14px 6px;
            background-color: #fff;
            border-radius: 0 8px 8px 8px;
            position: relative;
            transition: 0.3s ease all;
            opacity: 1;
            transform-origin: top;
            z-index: 2;
            box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
            margin-top: 4px;
            margin-left: -54px;
            max-width: calc(100% - 66px);
          }
          .message-content:before {
            position: absolute;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACQUExURUxpccPDw9ra2m9vbwAAAAAAADExMf///wAAABoaGk9PT7q6uqurqwsLCycnJz4+PtDQ0JycnIyMjPf3915eXvz8/E9PT/39/RMTE4CAgAAAAJqamv////////r6+u/v7yUlJeXl5f///5ycnOXl5XNzc/Hx8f///xUVFf///+zs7P///+bm5gAAAM7Ozv///2fVensAAAAvdFJOUwCow1cBCCnqAhNAnY0WIDW2f2/hSeo99g1lBYT87vDXG8/6d8oL4sgM5szrkgl660OiZwAAAHRJREFUKM/ty7cSggAABNFVUQFzwizmjPz/39k4YuFWtm55bw7eHR6ny63+alnswT3/rIDzUSC7CrAziPYCJCsB+gbVkgDtVIDh+DsE9OTBpCtAbSBAZSEQNgWIygJ0RgJMDWYNAdYbAeKtAHODlkHIv997AkLqIVOXVU84AAAAAElFTkSuQmCC");
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: contain;
            content: "";
            top: 0;
            left: -12px;
            width: 12px;
            height: 19px;
          }
          .author {
            font-size: 13px;
            font-weight: 700;
            line-height: 18px;
            color: rgba(0, 0, 0, 0.4);
          }
          .text-block {
            font-size: 14px;
            line-height: 19px;
            margin-top: 4px;
            color: #111;
          }
          .timestamp {
            text-align: right;
            margin-top: 4px;
            font-size: 12px;
            line-height: 16px;
            color: rgba(17, 17, 17, 0.5);
            margin-right: -8px;
            margin-bottom: -4px;
          }
        `}
      </style>
    </>
  );
}

export default Conversation;
