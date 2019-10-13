"use strict";

exports.__esModule = true;
exports.Chat = void 0;

var _index = require("zoid/src/index");

var _template = require("./template");

var _utils = require("./utils");

const Chat = (0, _index.create)({
  tag: "mcs-whatsapp",
  url: ({
    props
  }) => {
    return {
      mobileLocal: `http://${__LOCAL_MOBILE_URL__}:4001`,
      local: `http://localhost:4001`,
      production: `https://c.mcstech.dev`
    }[props.env];
  },
  attributes: {
    iframe: {
      scrolling: "no"
    }
  },
  autoResize: {
    width: false,
    height: true,
    element: ".mcs-chat"
  },
  props: {
    env: {
      type: "string",
      default: () => "production"
    },
    phoneNumber: {
      type: "string",
      default: () => "+6012345678"
    },
    chatHeader: {
      type: "object",
      required: false,
      default: () => ({
        chatHeader: {
          name: "Chloë",
          caption: "Typically replies within a day",
          avatar: "https://i.pinimg.com/originals/24/d0/75/24d0752430c3cec6d08b605b66c27315.jpg"
        }
      })
    },
    welcomeMessage: {
      type: "string",
      required: false,
      default: () => "Hi there 👋. How can I help you?"
    },
    playAlertSound: {
      type: "function",
      required: false,
      default: () => _utils.playAlertSound
    },
    layout: {
      type: "object",
      required: false,
      default: () => ({
        layout: {
          web: "MB2",
          mobile: "discreet"
        }
      })
    }
  },
  defaultContext: __DEFAULT_CONTEXT__,
  containerTemplate: _template.containerTemplate
});
exports.Chat = Chat;