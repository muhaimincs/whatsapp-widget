import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-image">
          <div className="image-inner">
            <div className="image-user"></div>
          </div>
        </div>
        <div className="header-info">
          <div className="header-info-name">Joe</div>
          <div className="header-info-caption">Hey how can I help</div>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            background-color: rgb(9, 94, 84);
            display: flex;
            align-items: center;
            padding: 24px 20px;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
            color: rgb(255, 255, 255);
            border-radius: 10px 10px 0 0px;
          }
          .header-image {
            width: 52px;
            height: 52px;
            display: block;
            position: relative;
            flex-shrink: 0;
          }
          .header-image:before {
            content: "";
            bottom: 0;
            right: 0;
            width: 12px;
            height: 12px;
            box-sizing: border-box;
            background-color: #4ad504;
            display: block;
            position: absolute;
            z-index: 1;
            border-radius: 50%;
            border: 2px solid #fafafa;
          }
          .image-inner {
            height: 100%;
            width: 100%;
            overflow: hidden;
            border-radius: 50%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .image-inner:after {
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.1);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            content: "";
            overflow: hidden;
          }
          .image-user {
            background-image: url(https://pbs.twimg.com/profile_images/951055655594545153/F6eybr-i.jpg);
            min-width: 100%;
            height: 100%;
            flex-shrink: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .header-info {
            margin-left: 16px;
            margin-right: 16px;
          }
          .header-info-name {
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
          }
          .header-info-caption {
            font-size: 13px;
            line-height: 18px;
            margin-top: 4px;
          }
        `}
      </style>
    </>
  );
}

export default Header;
