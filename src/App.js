import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import useAuthChecked from "./hooks/useAuthChecked";
import PrivateRouter from "./router/PrivateRouter";
import PublicRouter from "./router/PublicRoter";
import Footer from "./components/footer/Footer";
import MyCustomars from "./components/mycustomars/MyCustomars";

function App() {
  const { user } = useSelector((state) => state.auth);
  const authChecked = useAuthChecked();

  return !authChecked ? (
    <div>Auth Checking....</div>
  ) : (
    <BrowserRouter>
      {user?.email && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRouter>
              <Register />
            </PublicRouter>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
        <Route
          path="/customars"
          element={
            <PrivateRouter>
              <MyCustomars />
            </PrivateRouter>
          }
        />
      </Routes>
      {user?.email && <Footer />}
    </BrowserRouter>
  );
}

export default App;
