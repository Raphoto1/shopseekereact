import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarSeeker from "./components/navBar/NavBarSeeker";
import DesignListContainer from "./components/generalDesigns/DesignListContainer";
import DetailDesignContainer from "./components/detailDesign/DetailDesignContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorNav from "./components/extras/ErrorNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarSeeker />
        <Routes>
          <Route path="/" element={<DesignListContainer />} />
          <Route path="/category/:idCategory"  element={<DesignListContainer/>}/>
          <Route path="/detail/:idItem" element={<DetailDesignContainer/>}/>
          <Route path="*" element={<ErrorNav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
