import React from "react";
import Footer from "../Footer";
import { projects } from "../static/projectData";
import "./MyPage.css";

const MyPage = () => {
  const filteredProjects = projects;

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredProjects[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredProjects[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="projects__mypage">
        {projects.map((item) =>
          item.username === "kimcoding" ? (
            <li className="project" key={item.id}>
              <div className="project__profile">
                <img src={item.picture} />
              </div>
              <div className="project__content">
                <div className="project__userInfo">
                  <span className="project__username">{item.username}</span>
                  <span className="project__createdAt">{item.createdAt}</span>
                </div>
                <div className="project__message">{item.content}</div>
              </div>
            </li>
          ) : (
            <li key={item.id} />
          )
        )}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
