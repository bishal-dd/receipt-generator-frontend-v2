import request from "graphql-request";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useAuth } from "@clerk/nextjs";

export async function requestAPI<T>(
  query: TypedDocumentNode<T, any>,
  token: string | null,
  variables?: any
): Promise<T> {
  console.log(token);
  try {
    const headers = {
      authorization: token ? `Bearer ${token}` : "",
    };

    const data = await request<T>(
      process.env.NEXT_PUBLIC_API_URL!,
      query,
      variables,
      headers
    );

    return data;
  } catch (error) {
    throw error;
  }
}
