import { useMutation } from '@tanstack/react-query';
import { verifyReceiptFileMutation } from '../graphql/mutations/verifyReceiptFile';

export function useVerifyReceiptFile() {
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URI}/verify-receipt-file`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await res.json();
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      return data as { valid: boolean; message: string };
    },
  });
}
