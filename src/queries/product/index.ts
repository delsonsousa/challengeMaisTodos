import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Products } from "./types";

async function getProducts() {
  const { data } = await api.get<Products[]>("/products");

  return data;
}

export default function useFetchProducts() {
  return useQuery(["products"], getProducts);
}
