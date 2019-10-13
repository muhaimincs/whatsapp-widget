import Launcher from "launcher";
import Chatbox from "chatbox";

const Index = () => {
  return (
    <div>
      <Chatbox />
      <Launcher />
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
            background-color: #222;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
