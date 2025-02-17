import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout></UserLayout>}>
            {/* User */}
          </Route>
          <Route>{/* Admin */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
