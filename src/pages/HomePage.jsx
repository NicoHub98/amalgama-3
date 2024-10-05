import React, { useEffect } from "react";
import { useUserStore } from "../store";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return (
    <div className="flex flex-col gap-10 items-center">
      Bienvenido <span className="font-bold">{user?.email}</span>
      <Button name="Cerrar Sesión" fn={logout} />
    </div>
  );
};

export default HomePage;
