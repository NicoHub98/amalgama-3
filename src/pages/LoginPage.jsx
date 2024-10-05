import React, { useEffect, useState } from "react";
import { useUserStore } from "../store";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.info("Por favor, rellene todos los campos");
      return;
    }
    setUser({ email, password });
  };

  useEffect(() => {
    if (user) navigate("/home");
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
        <Button name="Iniciar Sesión" type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
