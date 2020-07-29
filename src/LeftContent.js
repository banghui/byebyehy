import React from "react";
import "./LeftContent.css";

export default function LeftContent() {
  return (
    <div className="leftContent">
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "10px",
            fontSize: "18px"
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: 500 }}>My Groups (6)</div>
        </div>
        <Row title="New Job" lastUpdated="1 month ago" />
        <Row title="Stones and Scream" lastUpdated="1 month ago" />
        <Row title="Music Enthusiasts" lastUpdated="4 month ago" />
        <Row title="Hamster Enthusiasts" lastUpdated="1 year ago" />
        <Row title="Product Enthusiasts" lastUpdated="4 years ago" />
        <Row title="Singles Club" lastUpdated="26 years ago" />
        <br />
        <div className="leftLink">Discover groups</div>
        <div className="leftLink">Join your school groups</div>
      </div>
    </div>
  );
}

function Row({ title, lastUpdated }) {
  return (
    <div className="row">
      <div style={{ marginRight: "10px" }}>
        <img
          alt="randompic"
          style={{ borderRadius: "4px" }}
          src="https://picsum.photos/48"
        />
      </div>
      <div className="rowContent">
        <div className="rowContentTitle">{title}</div>
        <div className="rowContentSubtitle">Last updated {lastUpdated}</div>
      </div>
    </div>
  );
}
