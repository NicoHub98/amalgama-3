import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl text-center">
        Error - La página solicitada no existe
      </h1>
      <Button name="Volver" fn={() => navigate(-1)} />
    </div>
  );
};

export default ErrorPage;
