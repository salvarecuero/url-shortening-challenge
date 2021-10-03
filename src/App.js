import React from "react";
import Header from "./components/Header/Header.component";
import NavBar from "./components/NavBar/NavBar.component";
import Shortener from "./components/Shortener/Shortener.component";
import Statistics from "./components/Statistics/Statistics.component";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Shortener />
      <Statistics />
    </>
  );
}

export default App;
