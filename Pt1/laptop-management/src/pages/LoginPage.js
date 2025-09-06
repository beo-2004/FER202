import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginForm from "../components/Auth/LoginForm";

function LoginPage() {
  const { setUser } = useContext(AuthContext);

  return (
    <section className="d-flex justify-content-center align-items-center vh-100 login-bg">
      <div className="login-box w-100 mx-auto p-4" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Laptop Management Login</h2>
        <LoginForm setUser={setUser} />
      </div>
    </section>
  );
}

export default LoginPage;
