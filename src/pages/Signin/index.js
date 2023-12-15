import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/logo.svg";
import { Img, Senha, Linha } from "./styles";
import ButtonGoogle from "../../components/ButtonGoogle";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <Img>
        <a href="http://localhost:3000/" target="_blank">
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </Img>
      <C.Content>
        <C.Label>Faça seu login</C.Label>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Senha>Esqueceu a senha?</Senha>
        <C.labelError>{error}</C.labelError>
        <Button Text="Login" onClick={handleLogin} />
        {/* <div class="linha" id="linha1"></div> */}
        <Linha>
          <text>Ou</text>
        </Linha>
        <ButtonGoogle Text="Login com Google" onClick={handleLogin} />
        <C.LabelSignup>
          Não possui conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
