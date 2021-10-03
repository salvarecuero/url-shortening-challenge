import React from "react";
import Header from "./components/Header/Header.component";
import NavBar from "./components/NavBar/NavBar.component";
import Shortener from "./components/Shortener/Shortener.component";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Shortener />
    </>
  );
}

export default App;
