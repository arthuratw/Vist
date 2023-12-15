import React from "react";
import * as C from "./styles";
import GoogleIcon from "../../assets/32.png"; // Importe o ícone

const ButtonGoogle = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      <img
        src={GoogleIcon}
        alt="Google Icon"
        style={{ marginRight: "60px", marginLeft: "40px" }}
      />
      {Text}
    </C.Button>
  );
};

export default ButtonGoogle;

// import React from "react";
// import * as C from "./styles";

// const ButtonGoogle = ({ Text, onClick, Type = "button" }) => {
//   return (
//     <C.Button type={Type} onClick={onClick}>
//       {Text}
//     </C.Button>
//   );
// };

// export default ButtonGoogle;
