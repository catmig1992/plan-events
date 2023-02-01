import "./App.css";
import NavBar from "./components/NavBar";



function App() {
  return (
    /////Homepage Information///////
    <div className="App">

      <NavBar />
      <h1 className="title">SPARKLY EVENT PLANNER</h1>
      <div>
        <img
          className="main-image"
          src="/image/event_table.jpeg"
          alt="balloons"
        />
        <div className="background_About">
          <h2 className="About">About us</h2>

          <p className="About">
            Planning a PARTY is our business! We are here for your every need to
            get the party started.
          </p>
          <p className="About">
            We have been planning a party since 2010 and have been partying for
            13 years!
          </p>
          <p className="About">
            To get started, click "Build Your Own Event" and fill out the form.
            If you have questions.
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
