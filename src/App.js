import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<About/>} path='/about' />
          <Route element={<Contact/>} path='/contact' />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
