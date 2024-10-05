import React, { useEffect, useState } from "react";
import { useUserStore } from "../store";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email, password }, navigate);
  };

  useEffect(() => {
    if (user.token) navigate("/home");
  }, [user]);

  return (
    <div className="flex flex-col border rounded-lg gap-10 p-10">
      <h1 className="text-3xl text-center">Iniciar Sesión</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <FormInput
            id="email"
            type="text"
            name="Email"
            value={email}
            setValue={setEmail}
          />

          <FormInput
            id="password"
            type="password"
            name="Password"
            value={password}
            setValue={setPassword}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
