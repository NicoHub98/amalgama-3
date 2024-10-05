import { create } from "zustand";
import { persist } from "zustand/middleware";
import { login } from "./functions/login";
import { toast } from "react-toastify";

const errorToastData = {
  render: "Error al iniciar sesión",
  type: "error",
  isLoading: false,
  autoClose: 2000,
};
const successToastData = {
  render: "Sesión iniciada",
  type: "success",
  isLoading: false,
  autoClose: 2000,
};

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user, nav) => {
        const loadingToast = toast.loading("Iniciando Sesión...");

        login(user.email, user.password)
          .then((response) => {
            toast.update(loadingToast, successToastData);
            set({ user: { email: user.email, token: response.data.token } });
            nav("/home");
          })
          .catch((error) => {
            toast.update(loadingToast, errorToastData);
            console.log(error);
          });
      },
    }),
    {
      name: "user-storage",
    }
  )
);
