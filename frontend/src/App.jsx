import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right"></Toaster>
        <Routes>
          <Route path="/" element={<UserLayout></UserLayout>}>
            {/* User */}
            <Route index element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route
              path="collections/:collection"
              element={<CollectionPage></CollectionPage>}
            ></Route>
            <Route
              path="product/:id"
              element={<ProductDetails></ProductDetails>}
            ></Route>
            <Route path="checkout" element={<Checkout></Checkout>}></Route>
            <Route
              path="order-confirmation"
              element={<OrderConfirmationPage></OrderConfirmationPage>}
            ></Route>
          </Route>
          <Route>{/* Admin */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
