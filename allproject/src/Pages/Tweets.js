import React from "react";
import { dummyTweets } from "../static/dummyData";
import "./Tweets.css";
import Footer from "../Footer";

const Tweets = () => {
  return (
    <div>
      <div className="top__container">
        <div className="tweetForm__count" role="status">
          <span className="myname">kanghyew0n</span>
          <span className="tweetForm__count__text">
            {"total: " + dummyTweets.length}
          </span>
        </div>
        <h2 className="maintitle">Project.zip</h2>
        <p className="subtitle">CodeStates에서 학습한 프로젝트입니다.</p>
      </div>
      <ul className="tweets">
        {dummyTweets.map((tweet) => {
          return (
            <li className="tweet" id={tweet.id} key={tweet.id}>
              <div className="tweet__content">
                <div className="tweet__userInfo">
                  <span className="tweet__username">{tweet.username}</span>
                  <div className="component">
                    <span className="component__text"> {tweet.team}</span>
                  </div>
                </div>
                <div className="tweet__message">{tweet.content}</div>

                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tweets;
