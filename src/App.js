import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewTask from "./components/pages/NewTask";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Test from "./components/pages/Test";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/projects" element={<Test />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;