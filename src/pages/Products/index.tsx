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
import useFetchProducts from "../../queries/product";

export function Products() {
  const { data } = useFetchProducts();

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
      </Container>
    </div>
  );
}
