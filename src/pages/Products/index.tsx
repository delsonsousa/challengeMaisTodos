import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  Container,
  ProductsCardContainer,
  ProductsCardContent,
  ProductsDescription,
  Title,
  Price,
  CartButton,
  ButtonContainer,
} from "./styles";

import { Header } from "../../components/Header";
import { priceFormatter } from "../../utils/formatter";
import { ShoppingCart } from "phosphor-react";
import { useGetProducts } from "../../queries/product/";
import { PocketCart } from "../../components/PocketCart";

export function Products() {
  const { data } = useGetProducts();

  return (
    <div>
      <Header />
      <Container>
        <ProductsCardContainer>
          {data?.map((product) => (
            <ProductsCardContent key={product.id}>
              <img src={product.photo} />
              <ButtonContainer>
                <CartButton>
                  <ShoppingCart size={24} />
                </CartButton>
              </ButtonContainer>
              <ProductsDescription>
                <Title>{product.name}</Title>
                <Price>{priceFormatter.format(product.price)}</Price>
              </ProductsDescription>
            </ProductsCardContent>
          ))}
        </ProductsCardContainer>
        <PocketCart />
      </Container>
    </div>
  );
}
