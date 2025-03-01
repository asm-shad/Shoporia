import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right"></Toaster>
        <Routes>
          <Route path="/" element={<UserLayout></UserLayout>}>
            {/* User */}
            <Route index element={<Home></Home>}></Route>
          </Route>

          <Route>{/* Admin */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
