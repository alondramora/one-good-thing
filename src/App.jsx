import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import About from "./About";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([
    {
      title: "Successful launch day!",
      body: "Our launch was successful, it was a great day.",
      author: "Alondra",
      id: 1,
    },
    {
      title: "Put in some studying",
      body: "I have put in a few hours of studying today and it feels great.",
      author: "Alondra",
      id: 2,
    },
    {
      title: "Did a great job at work today",
      body: "Some days I don't feel like I'm excelling but today I did!",
      author: "Alondra",
      id: 3,
    },
  ]);
  return (
    <>
      <Header />
      <About />
      <PostList
        posts={posts}
        title="All of the good things that happened today"
      />
    </>
  );
}

export default App;
