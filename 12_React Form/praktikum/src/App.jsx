import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount"
import CreateProduct from "./pages/CreateProduct";
import DetailProduct from "./pages/DetailProduct";
import Error from "./pages/404";
import Register from "./pages/Register";
import Test from "./pages/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/addAccount" exact element={<CreateAccount />} />
          <Route path="/addproduct" exact element={<CreateProduct />} />
          <Route path="/details/:id" exact element={<DetailProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
