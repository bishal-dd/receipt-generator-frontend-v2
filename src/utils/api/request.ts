import request from "graphql-request";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export async function requestAPI<T>(
  query: TypedDocumentNode<T, any>,
  variables?: any
): Promise<T> {
  try {
    const data = await request<T>(
      process.env.NEXT_PUBLIC_API_URL!,
      query,
      variables
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Let React Query handle the error
  }
}
