import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="icons">
        <Link to="/">
          {/* <i className="far fa-comment-dots"></i> */}
          <div className="iconbox"></div>
        </Link>
        {/* <Link to="/about">
        <i className="far fa-question-circle"></i>
      </Link> */}
        <Link to="/mypage">
          {/* <i className="far fa-user"></i> */}
          <div className="iconbox"></div>
        </Link>
        <div className="iconbox"></div>
      </div>
    </section>
  );
};

export default Sidebar;
