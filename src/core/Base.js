import React from "react";
import Menu from "./menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-3",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="page-footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any question feel, free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted text-center">
          An Amazing place to Do do{" "}
          <span className="text-white">Online Shopping</span>
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
