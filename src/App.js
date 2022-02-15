import "./App.css";

import Nav from "./components/Nav";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Menu from "./screens/Menu";
import Loading from "./screens/Loading";

import ReactFullpage from "@fullpage/react-fullpage";

import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2100);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <div className="blackUp"></div>
          <div className="blackDown"></div>
          <Nav />
          <ReactFullpage
            // licenseKey={"YOUR_KEY_HERE"}
            scrollingSpeed={1000}
            // navigation <===  Add "navigation" to add a Slider on the right
            // navigationPosition = {'left'}
            dragAndMove={"fingersonly"}
            scrollOverflow={true}
            scrollOverflowReset={true}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section" data-anchor="home">
                    <Home />
                  </div>
                  <div className="section section2" data-anchor="menu">
                    <Menu />
                  </div>
                  <div className="section" data-anchor="contact">
                    <Contact />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
