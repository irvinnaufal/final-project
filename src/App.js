import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import Beranda from "./beranda";
import Footer from "./component/footer";
import Lowongan from "./lowongan";
import Detail from "./detail";
import Login from "./authentication/login";
import Register from "./authentication/register";
import Profile from "./profile";
import Dashboard from "./dashboard";
import LoginRoute from "./authentication/loginroute";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route
              path="/job-vacancy"
              element={
                <LoginRoute>
                  <Lowongan />
                </LoginRoute>
              }
            />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/dashboard"
              element={
                <LoginRoute>
                  <Dashboard />
                </LoginRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1 className="text-center text-2xl mt-60 mb-96">404 Page Not Found</h1>} />
          </Routes>
        </GlobalProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
