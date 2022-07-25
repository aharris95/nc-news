import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Topic from './components/Topic'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Header />
        <Navbar />
      </header>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/topic/:topic' element={<Topic/>} />  
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
