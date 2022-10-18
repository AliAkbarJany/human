import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h2>hello rafsan and Aupam</h2>
      <p>I added this line</p>
      <del>Ignore this</del>
      <Navbar></Navbar>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
