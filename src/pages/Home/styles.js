import styled from "styled-components";

export const Img = styled.div`
  object-fit: contain;
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%; 
  height: 50%;
  margin-right: 10px;
`;

export const Label = styled.div`
  gap: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  max-width: 220%;
  max-height: 50%;
  border-radius: 3rem;
  font-family: Roboto;
`;
export const Rec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-style: outset;
  border: 2px solid #7B68EE; /* Add border with 2px width and black color */
  box-shadow: 1rem 5px 5px #5555;
  background-color: white;
  max-width: 450px; //28.125rem
  max-height: 450px;
  border-radius: 4rem;
  font-family: Roboto;
  `;
  
export const Desp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;  width: 100%;
  height: 100%;
  border-style: outset;
  border: 2px solid #7B68EE;
  box-shadow: 1rem 5px 5px #5555;
  background-color: white;
  max-width: 450px;
  max-height: 450px;
  border-radius: 4rem;
  font-family: Roboto;
  `;


export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 28rem;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.h2``;
