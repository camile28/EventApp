import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import image from "../assets/image.png";

export const PageNotFound = () => {
  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "lightblue",
      }}
    >
      <img src={image} alt="sinking boat" />
      <h2>Ooooops, you're probably lost</h2>
      <h4>
        Nothing there. Go back <Link to="/">Here</Link>
      </h4>
    </div>
  );
};
