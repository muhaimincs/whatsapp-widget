/* @flow */

import { create } from "zoid/src/index";

import { containerTemplate } from "./template";
import { formatAMPM } from "./utils";

export const Chat = create({
  tag: "mcs-whatsapp",

  url: ({ props }) => {
    return {
      mobileLocal: `http://${__LOCAL_MOBILE_URL__}:3000`,
      local: `http://localhost:3000`,
      production: `https://whatsapp-widget.mcs.now.sh`
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
        name: "Chloë",
        caption: "Typically replies within a day",
        avatar:
          "https://www.telegraph.co.uk/content/dam/films/2018/09/07/TELEMMGLPICT000173323037_trans_NvBQzQNjv4BqKfPPARnOhb10Jv19E_BU963M8VqvhzgXBFeugr-hINU.jpeg?imwidth=1400"
      })
    },
    welcomeMessage: {
      type: "object",
      required: false,
      default: ({ props }) => ({
        author: props.chatHeader.name,
        message: props.message,
        timestamp: formatAMPM(new Date())
      })
    },
    message: {
      type: "string",
      required: false,
      default: () => "Hey there, How can I help you?"
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
