import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/pages/Login/Login";
import ChangePassword from "./components/pages/ChangePassword/ChangePassword";
import Register from "./components/pages/ClientRegister/Register";
import Carrinho from "./components/pages/ServiceRequestCart/Carrinho";
import CreateService from "./components/pages/CreateService/CreateService";

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
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
