import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Cursos } from "./pages/Cursos";
import { Skills } from "./pages/Skills";
import { Projetos } from "./pages/Projetos";
import { Contato } from "./pages/Contato";
import { Page404 } from "./pages/Page404";
import { GlobalStyle } from "./GlobalStyle";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
