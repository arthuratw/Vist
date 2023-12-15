import styled from "styled-components";

const Button = styled.button`
  display: flex;
  background-color: #fff;
  padding: 10px 20px;
  width: 95%;
  border-width: 1px;
  border-color: #3d6948;
  border-radius: 18px;
  font-size: 17px;
  color: #555;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    background-color: #5555;
  }
`;

// export const Button = styled.button`
//   display: flex;
//   align-items: center; /* Alinha itens verticalmente (ícone e texto) */
//   justify-content: center; /* Centraliza horizontalmente */
//   padding: 16px 20px;
//   outline: none;
//   border: none;
//   border-radius: 18px;
//   width: 100%;
//   cursor: pointer;
//   background-color: #7b68ee;
//   color: white;
//   font-weight: 900;
//   font-size: 20px;
//   line-height: 1; /* Centraliza verticalmente */
//   text-align: center; /* Centraliza horizontalmente */
//   max-width: 350px;
//   font-family: "Poppins", sans-serif;
// `;

const GoogleButton = styled(Button)`
  /* background-color: #000;
  color: #f00;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #357ae8;
  } */
`;

export { Button, GoogleButton };

// import styled from "styled-components";

// export const GoogleButton = styled.button`
//   background-color: #4285f4; /* Cor oficial do Google */
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: #357ae8; /* Cor de destaque ao passar o mouse */
//   }
// `;
