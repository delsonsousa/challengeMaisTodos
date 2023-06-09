import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
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
import { ProductsProps } from "../../@types/products";
import { priceFormatter } from "../../utils/formatter";
import { ShoppingCart } from "phosphor-react";

export function Products() {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  async function fetchProducts() {
    const response = await api.get("/products");

    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <ProductsCardContainer>
          {products.map((product) => (
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
