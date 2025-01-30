import { useCallback, useEffect, useState } from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { SearchableDropdown } from '@/components/utils';
import { useSearchProducts } from '../../data/hooks';

type ProductOption = {
  value: string;
  label: string;
  unitPrice: number;
};

type Props = {
  control: Control<any>;
  index: number;
  setValue: UseFormSetValue<any>;
};

export function ProductSearch({ control, setValue, index }: Props) {
  const { searchProducts } = useSearchProducts();
  const [defaultOptions, setDefaultOptions] = useState<ProductOption[]>([]);

  const loadOptions = useCallback(
    async (inputValue: string) => {
      console.log(inputValue);
      try {
        const response = await searchProducts(inputValue);
        const products = response.searchProducts || [];

        return products.map((product) => ({
          value: product.name,
          label: product.name,
          unitPrice: product.unit_price,
        }));
      } catch (error) {
        console.error('Error loading product options:', error);
        return [];
      }
    },
    [searchProducts] // Dependency array ensures the function is stable unless searchProducts changes
  );
  useEffect(() => {
    (async () => {
      const defaultProducts = await loadOptions('');
      setDefaultOptions(defaultProducts);
    })();
  }, [loadOptions]);
  return (
    <FormField
      control={control}
      name={`services.${index}.description`}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <SearchableDropdown
              loadOptions={loadOptions}
              value={
                field.value
                  ? { value: field.value, label: field.value, unitPrice: 0 }
                  : null
              }
              onChange={(selectedOption) => {
                field.onChange(selectedOption ? selectedOption.value : '');
                setValue(
                  `services.${index}.unitPrice`,
                  selectedOption?.unitPrice || 0
                );
              }}
              isLoading={false}
              defaultOptions={defaultOptions}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
