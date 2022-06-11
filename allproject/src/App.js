import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Tweets from "./Pages/Tweets";
import MyPage from "./Pages/MyPage";
// import About from "./Pages/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <section className="features">
            <div className="features-inner">
              <Routes>
                <Route path="/" element={<Tweets />} />
                <Route path="/mypage" element={<MyPage />} />
                {/* <Route path="/about" element={<About />} /> */}
              </Routes>
            </div>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
