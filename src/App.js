import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import NewTask from "./components/pages/NewTask";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Testes from "./components/pages/Testes";
import Footer from "./components/layout/Footer";
import Teste from "./components/pages/Teste";
import Login from "./components/pages/Login";
import ChangePassword from "./components/pages/ChangePassword";
import Register from "./components/pages/Register";
import Carrinho from "./components/pages/Carrinho";
import CreateService from "./components/pages/CreateService";
// import Register from "./components/pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trocar-senha" element={<ChangePassword />} />
          <Route path="/solicitacao" element={<Carrinho />} />
          <Route path="/criar-servico" element={<CreateService />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/newtask" element={<NewTask />} />
          <Route path="/testes" element={<Testes />} />
          <Route path="/teste/:id" element={<Teste />} /> */}
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
