import { Route, Routes } from "react-router";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";

const App = () => {
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App