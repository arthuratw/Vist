import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import { Img, Label, Rec, Desp, Buttons} from "./styles";
import Logo from "../../assets/logosimple.svg";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Img>
        <Img>
          <img src={Logo} className="logo react" alt="React logo" />
        </Img>
      </C.Img>
      <Buttons>
        <Button Text="RECEITA"/>
        <Button Text="DESPESA"/>
        </Buttons>
      <C.Label>
        
      <Rec>
      
      </Rec>
      <Desp>

      </Desp>
    </C.Label>
      {/* <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button> */}
    </C.Container>
  );
};

export default Home;
