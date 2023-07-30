import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { Events } from "../components/Events";
import { RegisterPage } from "../components/RegisterPage";
import { HomeEvents } from "../components/HomeEvents";
import { ProtectedRoute } from "./ProtectedRoute";
import { ResetPassword } from "../components/ResetPassword";
import { Camera } from "../scanner/Camera";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeEvents />
            </ProtectedRoute>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>Error 404</h1>} />
        <Route path="/barcode" element={<Camera/>} />
      </Routes>
    </>
  );
};
