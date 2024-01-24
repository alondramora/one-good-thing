import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import About from "./About";

function App() {
  return (
    <>
      <Header />
      <About />
      <Post />
      <Post />
    </>
  );
}

export default App;
