import React, { Suspense } from 'react';
import { ProductSearch } from './ProductSearch';
import { Loader } from '@/components/utils';
import { Control, UseFormSetValue } from 'react-hook-form';

type Props = {
  control: Control<any>; // Replace `any` with your form schema type
  index: number;
  setValue: UseFormSetValue<any>; // Replace `any` with your form schema type
};
export const SuspenseProductSearch = ({ control, index, setValue }: Props) => {
  return (
    <Suspense fallback={<Loader />}>
      <ProductSearch control={control} index={index} setValue={setValue} />
    </Suspense>
  );
};
