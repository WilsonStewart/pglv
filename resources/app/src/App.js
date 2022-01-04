import React from "react";
import "./App.css";
import LogList from "./components/LogList";
import Toolbar from "./components/Toolbar";

function App() {
  const tailedFile = null;

  return (
    <>
      <Toolbar tailedFile={tailedFile} />
      <LogList tailedFile={tailedFile} />
    </>
  );
}

export default App;
