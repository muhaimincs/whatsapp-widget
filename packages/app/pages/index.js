import { createRef, useEffect, useState } from "react";
import Head from "next/head";
import Launcher from "launcher";
import Chatbox from "chatbox";

const launcher = createRef();

const Index = () => {
  const [launch, setLaunch] = useState(false);

  function toggleChatbox() {
    setLaunch(!launch);
  }

  useEffect(() => {
    if (launcher.current) {
      // console.log(launcher.current.clientHeight);
      if (window.xprops) {
        window.xprops.resize({
          width: launcher.current.clientWidth,
          height: launcher.current.clientHeight
        });
      } else {
        console.error("MISSING WINDOW.XPROPS");
      }
    }
  }, [launcher.current]);

  return (
    <div>
      <Head>
        <script src="./chat.min.js" />
      </Head>
      {!launch ? (
        <Launcher ref={launcher} onClick={toggleChatbox} />
      ) : (
        <Chatbox ref={launcher} onClick={toggleChatbox} />
      )}
      <style jsx global>
        {`
          * {
            box-sizing: border-box !important;
            outline: none !important;
          }
          body {
            font-feature-settings: "kern";
            text-rendering: optimizeLegibility;
            font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto,
              Open Sans, Helvetica Neue, sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
