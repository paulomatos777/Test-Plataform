import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import NewTask from "./components/pages/NewTask";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Testes from "./components/pages/Testes";
import Footer from "./components/layout/Footer";
import Teste from "./components/pages/Teste";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/testes" element={<Testes />} />
          <Route path="/teste/:id" element={<Teste />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
