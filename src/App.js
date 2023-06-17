import { Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header"
import About from "./Components/About/About";
import Academics from "./Components/Academics/Academics";
import Research from "./Components/Research/Research";
import Experience from "./Components/Experience/Experience";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import './Components/style.css';
import Footer from "./Components/Shared/Footer";
import LetsChat from "./Components/Shared/LetsChat";
function App() {
  return (
    <div style={{ backgroundColor: "#f2f4f5" }}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='/academics' element={<Academics></Academics>}></Route>
        <Route path='/research' element={<Research></Research>}></Route>
        <Route path='/experience' element={<Experience></Experience>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <LetsChat></LetsChat>
      <Footer></Footer>
    </div>
  );
}

export default App;
