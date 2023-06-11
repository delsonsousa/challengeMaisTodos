import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductsStoreProps = {
  productsId: number[];
  addProductToCart: (id: number) => void;
  removeProductFromCart: (id: number) => void;
};

const useProductsStore = create(
  persist<ProductsStoreProps>(
    (set) => ({
      productsId: [],
      addProductToCart: (productId: number) => {
        set((state) => ({
          productsId: [...state.productsId, productId],
        }));
      },
      removeProductFromCart: (productId: number) => {
        set((state) => ({
          productsId: state.productsId.filter((id) => id !== productId),
        }));
      },
    }),
    {
      name: "product-storage",
    }
  )
);

export default useProductsStore;
