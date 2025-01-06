import request from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

export async function requestAPI<T>(
  query: TypedDocumentNode<T, any>,
  token: string | null,
  variables?: any
): Promise<T> {
  const headers = {
    authorization: token ? `Bearer ${token}` : '',
  };

  return await request<T>(
    process.env.NEXT_PUBLIC_API_URL!,
    query,
    variables,
    headers
  );
}
