export default () => (
  <div className="typing-indicator">
    <style jsx>
      {`
        .typing-indicator {
          background-color: transparent;
          will-change: transform;
          width: auto;
          padding: 0 0 20px 0;
          margin-top: 10px;
          -webkit-animation: 2s bulge infinite ease-out;
          animation: 2s bulge infinite ease-out;
        }
        .typing-indicator span {
          height: 8px;
          width: 8px;
          float: left;
          margin: 0 1px;
          background-color: #9e9ea1;
          display: block;
          border-radius: 50%;
          opacity: 0.4;
        }
        .typing-indicator span:nth-of-type(1) {
          -webkit-animation: 1s blink infinite 0.3333s;
          animation: 1s blink infinite 0.3333s;
        }

        .typing-indicator span:nth-of-type(2) {
          -webkit-animation: 1s blink infinite 0.6666s;
          animation: 1s blink infinite 0.6666s;
        }

        .typing-indicator span:nth-of-type(3) {
          -webkit-animation: 1s blink infinite 0.9999s;
          animation: 1s blink infinite 0.9999s;
        }

        @keyframes blink {
          50% {
            opacity: 1;
          }
        }

        @keyframes bulge {
          50% {
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
          }
        }
      `}
    </style>
    <span></span>
    <span></span>
    <span></span>
  </div>
);
