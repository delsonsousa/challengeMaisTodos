import { styled } from "styled-components";

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

export const ProductsCardContent = styled.button`
  width: 350px;
  max-width: 350px;
  margin-bottom: 30px;
  padding: 0 1.5rem;

  border: 0;
  background-color: transparent;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProductsDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
  /* padding: 0 2rem; */
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
`;
