import React, { useEffect, useState, useRef } from "react";
import throttle from "lodash.throttle";

import { messages } from "./messages";

import "./RightContent.css";

export default function RightContent() {
  const [windowWidth, setWindowWidth] = useState(0);
  const onResize = e => {
    // Min width is 991. Any window dimension smaller than
    // that will not affect our page
    if (window.innerWidth > 991) {
      setWindowWidth(window.innerWidth);
    }
  };
  const onResizeThrottled = throttle(onResize, 200);
  useEffect(() => {
    window.addEventListener("resize", onResizeThrottled);
    return () => {
      window.removeEventListener("resize", onResizeThrottled);
    };
  });
  const cards = messages.map((cardProps, i) => {
    return <Card {...cardProps} windowWidth={windowWidth} key={i} />;
  });
  return <div className="masonry">{cards}</div>;
}

function Card({
  coverImg,
  name = "user1",
  profileImg = "./profile-placeholder.jpg",
  title,
  rel = "Ex-colleague",
  msg,
  windowWidth
}) {
  const [span, setSpan] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(!coverImg);
  const titleRef = useRef();
  const msgRef = useRef();
  const coverImgRef = useRef();
  const userRef = useRef();
  const actionsRef = useRef();

  useEffect(() => {
    // calculate spans here
    if (imgLoaded) {
      const coverImgHeight =
        coverImg && coverImgRef.current ? coverImgRef.current.offsetHeight : 0;
      const totalHeight =
        coverImgHeight +
        userRef.current.offsetHeight +
        titleRef.current.offsetHeight +
        msgRef.current.offsetHeight +
        actionsRef.current.offsetHeight +
        84; // 84 to account for margins + paddings
      setSpan(Math.ceil(totalHeight / 28)); //28 = grid height + margin
    }
  }, [windowWidth, imgLoaded, coverImg]);

  const onLoad = e => {
    setImgLoaded(true);
  };

  // hide - opacity 0 until card until image has loaded to prevent
  // unsightly repaints
  const classes = `groupCard ${imgLoaded ? "" : "hide"}`;
  return (
    <div style={{ gridRowEnd: `span ${span}` }} className={classes}>
      <div ref={coverImgRef} className="groupCardImgContainer">
        {coverImg ? (
          <img
            alt="img"
            onLoad={onLoad}
            className="groupCardImg"
            src={coverImg}
          />
        ) : null}
      </div>
      <div ref={userRef} className="groupCardUserContainer">
        <div className="groupCardUserImgContainer">
          <img className="groupCardUserImg" src={profileImg} alt="profile" />
        </div>
        <div className="groupCardUserNameContainer">
          <div className="groupCardUserName">{name}</div>
          <div className="groupCardUserStatus">{rel}</div>
        </div>
      </div>
      <div ref={titleRef} className="groupCardTitle">
        {title}
      </div>
      <div ref={msgRef} className="groupCardMsg">
        {msg}
      </div>
      <div ref={actionsRef} className="groupCardActions">
        <div className="groupCardActionsSegment">
          <div>
            <img src="./16-like.svg" alt="like" />
          </div>
          &nbsp;
          <div>Like</div>
          &nbsp;&nbsp;&nbsp;
          <div>
            <img src="./16-comment.svg" alt="comment" />
          </div>
          &nbsp;
          <div>Comment</div>
        </div>
        <div className="groupCardActionsSegment">
          <div>
            <img src="./16-more.svg" alt="comment" />
          </div>
        </div>
      </div>
    </div>
  );
}
