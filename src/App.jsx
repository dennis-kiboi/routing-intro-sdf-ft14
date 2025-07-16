import About from "./pages/About"
import Contact from "./pages/Contact";
import Home from "./pages/Home"

const App = () => {
  let currentPage;
  if (window.location.pathname === "/") {
    currentPage = <Home />;
  } else if (window.location.pathname === "/contact") {
    currentPage = <Contact />
  } else if (window.location.pathname === "/about") {
    currentPage = <About />
  } else {
    currentPage = <h1>404 Not Found</h1>
  }

  return (
    <div>
      {currentPage}
    </div>
  )
}
export default App