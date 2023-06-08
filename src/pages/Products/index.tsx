import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import {
  Container,
  ProductsCardContainer,
  ProductsCardContent,
  ProductsDescription,
  Title,
  Price,
} from "./styles";

import { ProductsProps } from "../../@types/products";

export function Products() {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  async function fetchProducts(query?: string) {
    const response = await api.get("/products", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

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
              <ProductsDescription>
                <Title>{product.name}</Title>
                <Price>{product.price}</Price>
              </ProductsDescription>
            </ProductsCardContent>
          ))}
        </ProductsCardContainer>
      </Container>
    </div>
  );
}
