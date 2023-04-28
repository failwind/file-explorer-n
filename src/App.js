import logo from "./logo.svg";
import "./App.css";
import { demoFetch } from "./api/demo";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  //creating IP state
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
    demoFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React111ß
        </a>
      </header>

      <div className="App">
        <h2>Your IP Address is</h2>
        <h4>{ip}</h4>
      </div>
    </div>
  );
}

export default App;
