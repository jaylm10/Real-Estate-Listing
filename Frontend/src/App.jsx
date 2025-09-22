import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Sell from "./pages/Sell/Sell";
import Buy from "./pages/Buy/Buy";
import SellForm from "./pages/sellform/SellForm";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const location = useLocation();

  // Check if the current route is not SignUp or Login
  const showHeader = !["/signup", "/signin"].includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sellform" element={<SellForm />} />
        <Route
          path="/sell"
          element={
            <ProtectedRoutes>
              <Sell />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/buy"
          element={
            <ProtectedRoutes>
              <Buy />
            </ProtectedRoutes>
          }
        />
      </Routes>
      {showHeader && <Footer />}
    </>
  );
}

export default App;
