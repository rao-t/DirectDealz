import React from "react";
import RegistrationPage from "./components/RegistrationPage";
import RegPage from "./components/RegPage";
import OtpAuth from "./components/OtpAuth";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegistrationPage />}
      />
    </Routes>

  );
}
