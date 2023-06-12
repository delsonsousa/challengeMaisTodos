import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin: 0 auto;
  padding: 20px;
  transform: translate(-50%, 0);

  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.09);

  height: 100px;
  width: 90%;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const Item = styled.span`
  flex: 1;
  font-size: 1rem;
  color: ${({ theme }) => theme["gray-600"]};
`;

export const Price = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme["gray-900"]};
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  text-decoration: none;

  margin-left: 20px;
`;
