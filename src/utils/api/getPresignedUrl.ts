import { makeRequest } from './makeRequest';

export const getPresignedUrl = async (
  fileName: string,
  fileType: string,
  organizationId: string,
  userId: string
) => {
  const data = await makeRequest(
    `issuePresignedURL?filename=${fileName}&contentType=${fileType}&organizationId=${organizationId}&userId=${userId}`,
    {
      method: 'GET',
    }
  );

  // Ensure the presigned URL is included in the response body
  if (!data.url) {
    throw new Error('Presigned URL not found in response');
  }
  return data.url;
};
