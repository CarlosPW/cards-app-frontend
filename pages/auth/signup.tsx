import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Logo1 } from "../../assets/logo/logo1";
import { Button } from "../../components/ui";
import { AuthContext } from "../../contexts";
import { Form, SignupStyled } from "../../styles/pages";
import { InputText } from "../../styles/ui";

const SignupPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { registerUser } = useContext(AuthContext);

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    setLoading(true);
    const { email, password } = data;
    registerUser(email, password);
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

        <InputText
          type="password"
          placeholder="Repetir Contraseña"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && <span>Este campo es requerido.</span>}

        <div className="signup--button-container">
          <Button px="15px 20px" type="submit" loading={loading}>
            Crear
          </Button>
        </div>
      </Form>
    </SignupStyled>
  );
};

export default SignupPage;
