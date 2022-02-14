import "./App.css";

import Nav from "./components/Nav";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Menu from "./screens/Menu";

import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <div className="App">
      <Nav />
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        // navigation <===  Add "navigation" to add a Slider on the right
        // navigationPosition = {'left'}
        dragAndMove={"fingersonly"}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" data-anchor="home">
                <Home />
              </div>
              <div className="section" data-anchor="menu">
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
  );
}

export default App;
