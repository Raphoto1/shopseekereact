import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarSeeker from "./components/navBar/NavBarSeeker";
import DesignListContainer from "./components/generalDesigns/DesignListContainer";
import DetailDesignContainer from "./components/detailDesign/DetailDesignContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorNav from "./components/extras/ErrorNav";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/cartView/CartView";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBarSeeker />
          <Routes>
            <Route path="/" element={<DesignListContainer />} />
            <Route path="/Style/:idCategory"  element={<DesignListContainer/>}/>
            <Route path="/Shop/:idShop"  element={<DesignListContainer/>}/>
            <Route path="/detail/:idItem" element={<DetailDesignContainer/>}/>
            <Route path="*" element={<ErrorNav />} />
            <Route path="/cart" element={<CartView/>}/>
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </>
  );
}

export default App;
