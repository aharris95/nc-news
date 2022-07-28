import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Topic from "./components/Topic";
import Profile from "./components/Profile";
import SingleArticle from "./components/SingleArticle";
import { UserContext } from "./contexts/User";
import {useState} from 'react'

function App() {
  const [user, setUser] = useState({
    username:"grumpy19",
    name:"Paul Grump",
    avatar_url:"https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
  });

  return (
    <BrowserRouter>
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header>
          <Header />
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topic" element={<Topic />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
