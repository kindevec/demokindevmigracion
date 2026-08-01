import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Visas from './pages/Visas';
import Testimonios from './pages/Testimonios';
import Contacto from './pages/Contacto';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visas" element={<Visas />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
