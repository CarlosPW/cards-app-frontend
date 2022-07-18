import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { Logo1 } from "../../assets/logo/logo1";
import { Button } from "../../components/ui";
import { AuthContext } from "../../contexts";
import { Form, SignupStyled } from "../../styles/pages";
import { T } from "../../styles/Theme";
import { InputText } from "../../styles/ui";

const Signin: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { loginUser } = useContext(AuthContext);
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    const { email, password } = data;
    await loginUser(email, password);

    setLoading(false);
    router.push("/");
  };

  return (
    <SignupStyled>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo1 />
        <InputText
          type="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es requerido.</span>}
        <InputText
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Este campo es requerido.</span>}

        <div className="signup--button-container">
          <Button
            px="15px 20px"
            color="white"
            darkColor="black"
            textColor="black"
            onClick={() => router.push("/auth/signup")}
          >
            Crear Cuenta
          </Button>
          <Button px="15px 20px" type="submit" loading={loading}>
            Ingresar
          </Button>
        </div>
      </Form>
    </SignupStyled>
  );
};

export default Signin;
