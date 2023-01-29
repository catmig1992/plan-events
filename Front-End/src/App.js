
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">

      <nav>
                    <ul>
                        <li>
                            <a className="Nav-text" href="/">Home</a>
                        </li>
                        <li>
                        <a className="Nav-text" href="/services">Services</a>
                        </li>
                        <li>
                        <a className="Nav-text"href="/gallery">Gallery</a>
                        </li>
                        <li><a href="">
        <button className="button">Build Your Own Event</button>
    </a></li>
                    </ul>
                    </nav>
      <h1 className="title">SPARKLY EVENT PLANNER</h1>
    <div>
      <img className="main-image"  src="/image/event_table.jpeg" alt="balloons"/>
      <div>
       <h2 className="About">About us</h2>
   
        <p className="About">Planning a PARTY is our business! We are here for your every need to get the party started.</p>
        <p className="About">We have been planning a party since 2010 and have been partying for 13 years!</p>
        <p className="About">To get started, click "Build Your Own Event" and fill out the form. If you have questions.</p>
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
