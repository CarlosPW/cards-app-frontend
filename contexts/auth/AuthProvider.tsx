import { FC, useReducer, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

import { AuthContext, authReducer } from "./";

import { IUser } from "../../interfaces";
import cardsApi from "../../api/cardsApi";

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
  token: string | undefined;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
  token: Cookies.get("token") || undefined,
};

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const [configHeaders, setConfigHeaders] = useState({
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const router = useRouter();

  useEffect(() => {
    // checkToken();
  }, []);

  const checkToken = async () => {
    if (!state.token) {
      return;
    }

    try {
      const token = Cookies.get("token");
      if (!token) return;

      const { data } = await cardsApi.post("/auth/token-validation", { token });

      // const payload = {
      //   token,
      //   user: data.email,
      // };

      // TODO: Asignar email de usuario al hacer reload (F5)
      // dispatch({ type: "[Auth] - Login", payload });
    } catch (error) {
      Cookies.remove("token");
    }
  };

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await cardsApi.post("/auth/signin", { email, password });
      const { access_token } = data;
      Cookies.set("token", access_token);

      const payload = data;

      setConfigHeaders({
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      dispatch({ type: "[Auth] - Login", payload });
      return true;
    } catch (error) {
      return false;
    }
  };

  const registerUser = async (
    email: string,
    password: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await cardsApi.post("/auth/signup", {
        email,
        password,
      });
      const { access_token, user } = data;
      Cookies.set("token", access_token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          // @ts-ignore
          message: error.response?.data.message,
        };
      }

      return {
        hasError: true,
        message: "No se pudo crear el usuario - intente de nuevo",
      };
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("cart");
    router.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        configHeaders,

        // Methods
        loginUser,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
