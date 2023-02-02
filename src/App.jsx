
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
// import About from "./pages/about/About";
import MySharing from "./pages/mysharing/MySharing";
import Projects from "./pages/projects/Projects";
import Suggestion from "./pages/suggestions/Suggestion";
import Footer from "./components/footer/Footer";


function App() {
  console.log(import.meta.env.MODE)
 return(
    <>
    <BrowserRouter >
    <Header />
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path='about' element={<About />} /> */}
      <Route path='mysharing' element={<MySharing />} />
      <Route path='projects' element={<Projects />} />
      <Route path='suggestion' element={<Suggestion />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
 )
}

export default App
