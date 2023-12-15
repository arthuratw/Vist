import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/logo.svg";
import { Img } from "./styles";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  // const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("As senhas não são iguais");
      return;
    }
    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <Img>
        <a href="http://localhost:3000/signup" target="_blank">
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </Img>
      <C.Content>
        <C.Label>Crie sua Conta</C.Label>
        <Input
          type="nome"
          placeholder="Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
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
        <Input
          type="password"
          placeholder="Confirme sua Senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Criar" onClick={handleSignup} />
        <C.LabelSignin>
          Já possui cadastro?
          <C.Strong>
            <Link to="/">&nbsp;Login</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
