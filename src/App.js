import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarSeeker from "./components/navBar/NavBarSeeker";
import DesignListContainer from "./components/generalDesigns/DesignListContainer";
import DetailDesignContainer from "./components/detailDesign/subForTest/DetailDesignContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorNav from "./components/extras/ErrorNav";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/cartView/CartView";
import CheckOutContainer from "./components/checkOut/CheckOutContainer";
import Thankyou from "./components/thankyou/Thankyou";

function App() {
  return (
    <><head>
      <title>::Rafael Martinez::</title>
      <link rel="icon" type="image/jpg" href="./Assets/Icons/IconoR.png" />
    </head>
      <CartContextProvider>
        <BrowserRouter>
          <NavBarSeeker />
          <Routes>
            <Route path="/" element={<DesignListContainer />} />
            <Route path="/Style/:idCategory"  element={<DesignListContainer/>}/>
            <Route path="/Shop/:idCategory"  element={<DesignListContainer/>}/>
            <Route path="/detail/:idItem" element={<DetailDesignContainer/>}/>
            <Route path="*" element={<ErrorNav />} />
            <Route path="/cart" element={<CartView/>}/>
            <Route path="/checkout" element={<CheckOutContainer/>}/>
            <Route path="/thankyou/:orderId" element={<Thankyou/>}/>
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </>
  );
}

export default App;
