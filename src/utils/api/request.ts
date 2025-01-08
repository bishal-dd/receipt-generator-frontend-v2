import request from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useAuth } from '@clerk/nextjs'; // Import Clerk's useAuth hook

export function useRequestAPI() {
  const { getToken } = useAuth();

  return async function requestAPI<T>(
    query: TypedDocumentNode<T, any>,
    variables?: any
  ): Promise<T> {
    const token = await getToken();
    if (!token) {
      throw new Error('Token is required for the request');
    }

    const headers = {
      authorization: `Bearer ${token}`,
    };

    return await request<T>(
      process.env.NEXT_PUBLIC_API_URL!,
      query,
      variables,
      headers
    );
  };
}
