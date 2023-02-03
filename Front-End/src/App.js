import "./App.css";
import NavBar from "./components/NavBar";




function App() {

  return (
    /////Homepage Information///////
    <div className="App">
      <header>
      <h1 className="title">SPARKLY EVENT PLANNER</h1>
      </header>
 <NavBar />
 
      <img
          
          src="/image/border_decor.png"
          alt="balloons" width="2000px" height="700px"
        />

    </div>
  );
}

export default App;