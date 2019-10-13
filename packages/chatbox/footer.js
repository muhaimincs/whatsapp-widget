import React, { useState, useRef, useCallback } from "react";
import FooterIcon from "./footerIcon";
import FooterIconMic from "./footerIconMic";

function trimSpaces(string) {
  return string
    .replace(/&nbsp;/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
}

function pasteAsPlainText(event) {
  event.preventDefault();

  const text = event.clipboardData.getData("text/plain");
  document.execCommand("insertHTML", false, text);
}

function Footer() {
  const [placeHolderVisibility, setPlaceholderVisibility] = useState("visible");
  const input = useRef(null);

  const onChange = useCallback(str => {
    str = trimSpaces(input.current.innerText);
    if (str) {
      setPlaceholderVisibility("hidden");
    } else {
      setPlaceholderVisibility("visible");
    }
  }, []);

  const highlightAll = useCallback(event => {
    const cell = event.target;
    let range;
    let selection;
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(cell);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(cell);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    setTimeout(() => {
      document.execCommand("selectAll", false, null);
    }, 0);
  }, []);

  const onKeyPress = useCallback(event => {
    const keyCode = event.keyCode || event.which;

    if (keyCode === 13) {
      input.current.innerText = "";
      event.returnValue = false;
      if (event.preventDefault) event.preventDefault();
    }
  }, []);

  return (
    <>
      <footer>
        <div className="footer">
          <div className="emoji-wrapper">
            <div className="emoji-container">
              <button>
                <span data-icon="smiley">
                  <FooterIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="text-area">
            <div className="text-area-inner">
              <div
                className="wjdTm"
                style={{ visibility: placeHolderVisibility }}
              >
                Type a message
              </div>
              <div
                className="selectable-text"
                ref={input}
                contentEditable={true}
                data-tab="1"
                dir="ltr"
                spellCheck="true"
                onInput={onChange}
                onPaste={pasteAsPlainText}
                onFocus={highlightAll}
                onKeyPress={onKeyPress}
              ></div>
            </div>
          </div>
          <div className="microfont">
            <div className="mic-inner">
              <span>
                <button className="mic-button">
                  <span data-icon="ptt">
                    <FooterIconMic />
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            min-height: 62px;
            order: 3;
            position: relative;
            flex: none;
            width: 100%;
            box-sizing: border-box;
            z-index: 1;
            padding: 0;
            background-color: hsla(0, 0%, 100%, 0.6);
            border-radius: 0 0 10px 10px;
          }
          .footer {
            align-items: flex-end;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            max-width: 100%;
            min-height: 62px;
            position: relative;
            z-index: 2;
            background-color: #efefef;
            padding: 5px 10px;
            // border-left: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 0 0 10px 10px;
          }
          .emoji-wrapper {
            box-sizing: border-box;
            flex: none;
            min-height: 52px;
            padding: 5px 10px;
            will-change: width;
          }
          .emoji-container {
            display: flex;
            position: relative;
            height: 42px;
            width: 26px;
            transition: width 0.3s;
          }
          button {
            outline: none;
            border: 0;
            padding: 0;
            background: none;
            cursor: pointer;
          }
          .text-area {
            box-sizing: border-box;
            flex: 1 1 auto;
            font-size: 15px;
            font-weight: 400;
            line-height: 20px;
            min-height: 20px;
            min-width: 0;
            outline: none;
            width: inherit;
            will-change: width;
            background-color: #fff;
            border: 1px solid #fff;
            border-radius: 21px;
            padding: 9px 12px 11px;
            margin: 5px 10px;
          }
          .text-area-inner {
            position: relative;
            flex: 1;
            display: flex;
            overflow: hidden;
            padding-right: 0;
          }
          .wjdTm {
            color: #a0a0a0;
            font-size: 15px;
            line-height: 20px;
            pointer-events: none;
            position: absolute;
            top: 6px;
            transition: opacity 0.08s linear;
            user-select: none;
            z-index: 2;
            -webkit-font-smoothing: antialiased;
            top: 0;
            left: 2px;
          }
          .selectable-text {
            user-select: text;
            width: 100%;
            line-height: 20px;
            font-size: 15px;
            font-weight: 400;
            max-height: 100px;
            min-height: 20px;
            outline: none;
            overflow-x: hidden;
            overflow-y: auto;
            position: relative;
            white-space: pre-wrap;
            word-wrap: break-word;
            z-index: 1;
            padding: 0;
            padding-right: 2px;
          }
          .microfont {
            box-sizing: border-box;
            flex: none;
            min-height: 52px;
            padding: 5px 10px;
          }
          .mic-inner {
            position: relative;
            transition: width 0.18s ease-in-out;
            width: 24px;
            cursor: default;
            padding-top: 4px;
          }
          .mic-button {
            position: absolute;
            top: 9px;
            z-index: 2;
          }
          .mic-button-span {
          }
        `}
      </style>
    </>
  );
}

export default Footer;
