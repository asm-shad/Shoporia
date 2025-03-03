import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
          </Route>
          <Route>{/* Admin */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
