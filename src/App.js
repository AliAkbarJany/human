import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h2>hello rafsan</h2>
      <Navbar></Navbar>
      <h2>rafsan barnch</h2>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
