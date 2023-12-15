import styled from "styled-components";

export const Img = styled.div`
  object-fit: contain;
  z-index: 0;
  display: flex;
  align-items: left;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 6rem;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-style: outset;
  border: 1px solid #5555; /* Add border with 2px width and black color */
  box-shadow: 1rem 5px 5px #5555;
  background-color: white;
  max-width: 450px; //28.125rem
  padding: 2.5rem;
  border-radius: 2rem;
  font-family: Roboto;
`;

export const Label = styled.label`
  font-weight: 100;
  color: #3d6948;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
`;

export const LabelSignin = styled.label`
  font-size: 20px;
  color: #555;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
  outline: none;
  font-size: 17px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #1ab862;
  }
`;
