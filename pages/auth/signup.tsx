import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui";
import { Form, SignupStyled } from "../../styles/pages";
import { InputText } from "../../styles/ui";

const SignupPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
