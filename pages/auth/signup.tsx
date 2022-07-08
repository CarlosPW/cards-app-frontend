import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
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

  const onSubmit = (data: any) => {
    const { email, password } = data;
    registerUser(email, password);
    router.push("/");
  };

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <SignupStyled>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button px="15px 20px">Crear</Button>
        </div>
      </Form>
    </SignupStyled>
  );
};

export default SignupPage;
