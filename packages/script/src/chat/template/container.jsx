/* @flow */
/** @jsx node */

import { destroyElement, toCSS, toNum } from "belter/src/index";
import { EVENT, type RenderOptionsType } from "zoid/src/index";

const CLASS = {
  OUTLET: "outlet",
  VISIBLE: "visible",
  INVISIBLE: "invisible",
  COMPONENT_FRAME: "component-frame",
  PRERENDER_FRAME: "prerender-frame"
};

export function containerTemplate<P>({
  uid,
  frame,
  props,
  prerenderFrame,
  doc,
  event
}: RenderOptionsType<P>): ?HTMLElement {
  if (!frame || !prerenderFrame) {
    return;
  }

  const div = doc.createElement("div");
  div.setAttribute("id", uid);
  div.classList.add("mcs-chat");
  const style = doc.createElement("style");
  if (props.cspNonce) {
    style.setAttribute("nonce", props.cspNonce);
  }

  style.appendChild(
    doc.createTextNode(`
      #${uid} {
        z-index: 2147483000;
        position: fixed;
        overflow: hidden;
        min-width: 300px;
        max-width: 400px;
        min-height: 150px;
        max-height: calc(100% - 40px);
        right: 0;
        bottom: 0;
        -webkit-transition:350ms cubic-bezier(.25,.1,0,1);
        transition:350ms cubic-bezier(.25,.1,0,1);
      }
      #${uid} > iframe {
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: opacity .2s ease-in-out;
        margin: 0;
      }
      #${uid} > iframe:not(:first-of-type) {
        width: 100%;
        position: absolute;
        bottom: 0;
        overflow: hidden;
        display: flex;
        pointer-events: none;
      }
      #${uid} > iframe.${CLASS.INVISIBLE} {
        opacity: 0;
      }
      #${uid} > iframe.${CLASS.VISIBLE} {
        opacity: 1;
      }
      @media (min-device-width: 320px) and (max-device-width: 480px) {
        #${uid} {
          width: 100px;
          height: 100px;
          min-width: 100px;
          max-width: 100%;
          min-height: 100px;
          max-height: 100%;
          border-radius: 0;
        }
        .mcs-chat > iframe {
          bottom: 0;
          right: 0;
          width: auto;
          height: auto;
        }
      }
      @media (min-device-width: 768px) and (max-device-width: 1024px) {
        #${uid} {
          width: 100px;
          height: 100px;
          min-width: 100px;
          max-width: 100%;
          min-height: 100px;
          max-height: 100%;
          border-radius: 0;
        }
        .mcs-chat > iframe {
          bottom: 0;
          right: 0;
          width: auto;
          height: auto;
        }
      }
      @media (min-width: 768px) and (max-width: 1024px) {
        #${uid} {
          width: 100px;
          height: 100px;
          min-width: 100px;
          max-width: 100%;
          min-height: 100px;
          max-height: 100%;
          border-radius: 0;
        }
        .mcs-chat > iframe {
          bottom: 0;
          right: 0;
          width: auto;
          height: auto;
        }
      }
      `)
  );

  div.appendChild(frame);
  div.appendChild(prerenderFrame);
  div.appendChild(style);

  prerenderFrame.classList.add(CLASS.VISIBLE);
  frame.classList.add(CLASS.INVISIBLE);

  event.on(EVENT.RENDERED, () => {
    prerenderFrame.classList.remove(CLASS.VISIBLE);
    prerenderFrame.classList.add(CLASS.INVISIBLE);

    frame.classList.remove(CLASS.INVISIBLE);
    frame.classList.add(CLASS.VISIBLE);

    setTimeout(() => {
      destroyElement(prerenderFrame);
    }, 1);
  });

  event.on(EVENT.RESIZE, ({ height: newHeight, width: newWidth }) => {
    if (newHeight) {
      div.style.height = toCSS(newHeight);
    }

    if (newWidth) {
      div.style.width = toCSS(newWidth);
    }

    // to lock parent body scroll when webchat is open
    if (
      navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
      )
    ) {
      const numInPixel = toCSS(newWidth);
      const num = toNum(numInPixel);
      if (num > 300) {
        doc.body.style.overflow = "hidden";
      } else {
        doc.body.style.overflow = "visible";
      }
    }
  });

  return div;
}
