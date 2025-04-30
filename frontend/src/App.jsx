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
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./components/Common/ProtectedRoute";

function App() {
  return (
    <>
      <Provider store={store}>
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
              <Route
                path="order/:id"
                element={<OrderDetailsPage></OrderDetailsPage>}
              ></Route>
              <Route
                path="my-orders"
                element={<MyOrdersPage></MyOrdersPage>}
              ></Route>
            </Route>
            <Route path="/admin" element={<ProtectedRoute role="admin"><AdminLayout></AdminLayout></ProtectedRoute>}>
              {/* Admin */}
              <Route index element={<AdminHomePage></AdminHomePage>}></Route>
              <Route
                path="users"
                element={<UserManagement></UserManagement>}
              ></Route>
              <Route
                path="products"
                element={<ProductManagement></ProductManagement>}
              ></Route>
              <Route
                path="products/:id/edit"
                element={<EditProductPage></EditProductPage>}
              ></Route>
              <Route
                path="orders"
                element={<OrderManagement></OrderManagement>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
