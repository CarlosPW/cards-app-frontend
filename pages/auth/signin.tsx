import EventEmitter from "events";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui";
import { AuthContext } from "../../contexts";
import { Form, SignupStyled } from "../../styles/pages";
import { InputText } from "../../styles/ui";

const signin = () => {
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
          >
            Crear Cuenta
          </Button>
          <Button px="15px 20px" type="submit">
            Ingresar
          </Button>
        </div>
        {loading && <p>Loading</p>}
      </Form>
    </SignupStyled>
  );
};

export default signin;
