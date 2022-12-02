import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarSeeker from "./components/navBar/NavBarSeeker";
import DesignListContainer from "./components/generalDesigns/DesignListContainer";
import Footer from "./components/extras/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorNav from "./components/extras/ErrorNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarSeeker />
        <Routes>
          <Route path="/" element={<DesignListContainer />} />
          <Route path="*" element={<ErrorNav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
