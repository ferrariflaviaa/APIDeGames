/* eslint-disable consistent-return */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { CustonHeaderPage } from "../../components/CustonHeaderPage";
import { InputForm } from "../../components/InputForm";
import { useUserLoginContext } from "../../context/userContext";
import { CustomContainer } from "../../styles/globalStyles";
import { validLogin } from "./services";
import { NewClientForm } from "./styled";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useUserLoginContext();

  return (
    <CustomContainer>
      <NewClientForm>
        <CustonHeaderPage title="Login" />
        <InputForm
          name="email"
          title="Digite seu email:"
          type="text"
          sizeInput={35}
          value={email}
          onChange={setEmail}
          disabled={false}
        />
        <InputForm
          name="password"
          title="Digite sua senha:"
          type="password"
          sizeInput={35}
          value={password}
          onChange={setPassword}
          disabled={false}
        />

        <Button
          isPrimary="blue"
          title="Login"
          onClink={() => validLogin({ email, password, setUser })}
          space={false}
        />
      </NewClientForm>
    </CustomContainer>
  );
};
