import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Products } from "./types";

async function getProducts() {
  const { data } = await api.get<Products[]>("/products");

  return data;
}

async function postProducts() {
  const { data } = await api.post<Products[]>("/products");

  return data;
}

async function updateProducts() {
  const { data } = await api.put<Products[]>("/products");

  return data;
}

export function useGetProducts() {
  return useQuery(["products"], getProducts);
}

export function usePostProducts() {
  return useQuery(["products"], postProducts);
}

export function useUpdateProducts() {
  return useQuery(["products"], updateProducts);
}
