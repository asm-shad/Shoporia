import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
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
