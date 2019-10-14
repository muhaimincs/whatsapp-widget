/* @flow */

import { create } from "zoid/src/index";

import { containerTemplate } from "./template";
// import { playAlertSound } from "./utils";

export const Chat = create({
  tag: "mcs-whatsapp",

  url: ({ props }) => {
    return {
      mobileLocal: `http://${__LOCAL_MOBILE_URL__}:3000`,
      local: `http://localhost:3000`,
      production: `https://whatsapp-widget-8m34qdmay.now.sh`
    }[props.env];
  },

  attributes: {
    iframe: {
      scrolling: "no"
    }
  },

  autoResize: {
    width: true,
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
      required: false,
      default: () => "+6012345678"
    },
    chatHeader: {
      type: "object",
      required: false,
      default: () => ({
        chatHeader: {
          name: "Chloë",
          caption: "Typically replies within a day",
          avatar:
            "https://i.pinimg.com/originals/24/d0/75/24d0752430c3cec6d08b605b66c27315.jpg"
        }
      })
    },
    welcomeMessage: {
      type: "object",
      required: false,
      default: ({ props }) => ({
        author: props.chatHeader.name,
        message: "Hi there, <br />How can I help you?",
        timestamp: Date.now()
      })
    },
    layout: {
      type: "object",
      required: false,
      default: () => ({ layout: { web: "MB2", mobile: "discreet" } })
    }
  },

  defaultContext: __DEFAULT_CONTEXT__,

  containerTemplate
});
