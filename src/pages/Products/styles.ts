import { styled } from "styled-components";
import { ShoppingCart } from "phosphor-react";

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const ProductsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-left: -34px;
  margin-bottom: 150px;

  width: 100%;
`;

export const ProductsCardContent = styled.div`
  width: 350px;
  max-width: 350px;
  margin-bottom: 30px;
  padding: 0 1.5rem;

  border: 0;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProductsDescription = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  margin-right: 10px;
  margin-left: auto;
  margin-top: -50px;
`;

export const CartButton = styled.button`
  border: 0;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  &:hover {
    transition: all 0.2s;
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  flex: 1;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
`;
