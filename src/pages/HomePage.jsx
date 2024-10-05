import React, { useEffect } from "react";
import { useUserStore } from "../store";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.token) navigate("/");
  }, [user]);

  return (
    <div>
      Bienvenido <span className="font-bold">{user.email}</span>
    </div>
  );
};

export default HomePage;
