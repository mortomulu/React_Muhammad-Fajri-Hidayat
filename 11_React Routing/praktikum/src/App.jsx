import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import Login from "./pages/Login";
import CreateProduct from "./pages/CreateProduct";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/addproduct" exact element={<CreateProduct />} />
          <Route path="/details/:id" exact element={<DetailProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
