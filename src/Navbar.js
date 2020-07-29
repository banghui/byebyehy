import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const onClick = () => {
    window.open("https://www.tinder.com/");
  };
  return (
    <div onClick={onClick} className="navbar">
      <div className="navbarLeft">
        <img
          style={{ marginTop: "1px" }}
          height="32px"
          src="logo.svg"
          alt="lol"
        />
        <div className="searchbar">
          <div>Items </div>
          <div>
            <IconArrowDown className="searchBarIconArrowDown" />
          </div>
          <div className="searchbarInput">
            <div className="searchPlaceHolderText">Search for an item</div>
            <div>
              <IconSearch className="searchBarIconSearch" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbarRight">
        <div className="sellButton">Sell</div>
      </div>
    </div>
  );
}

function IconArrowDown({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M10.146 7.146a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L8 9.293l2.146-2.147z" />
    </svg>
  );
}

function IconSearch({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>Search Icon</title>
      <path d="M15.618 17.032a9 9 0 1 1 1.414-1.414l5.675 5.675a1 1 0 0 1-1.414 1.414l-5.675-5.675zm-.701-2.05a1.017 1.017 0 0 1 .065-.065 7 7 0 1 0-.066.066z" />
    </svg>
  );
}
