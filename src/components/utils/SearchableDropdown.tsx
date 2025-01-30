import Link from 'next/link';
import React from 'react';
import { SingleValue, StylesConfig, components } from 'react-select';
import AsyncSelect from 'react-select/async';
import { Button } from '../ui/button';

interface ProductOption {
  value: string;
  label: string;
  unitPrice: number;
}

interface SearchableDropdownProps {
  loadOptions: (inputValue: string) => Promise<ProductOption[]>;
  value: ProductOption | null;
  onChange: (selectedOption: SingleValue<ProductOption>) => void;
  isLoading: boolean;
  defaultOptions: ProductOption[];
}

export const SearchableDropdown = ({
  loadOptions,
  value,
  onChange,
  isLoading,
  defaultOptions,
}: SearchableDropdownProps) => {
  const customStyles: StylesConfig<ProductOption, false> = {
    menu: (provided) => ({
      ...provided,
      zIndex: 1050,
      position: 'absolute',
    }),
    control: (provided) => ({
      ...provided,
      minHeight: '40px',
    }),
  };

  const NoOptionsMessage = (props: any) => {
    return (
      <components.NoOptionsMessage {...props}>
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <Button asChild>
            <Link href="/dashboard/products">+ Add Product</Link>
          </Button>
        </div>
      </components.NoOptionsMessage>
    );
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      value={value}
      onChange={onChange}
      isSearchable
      placeholder="Search a product..."
      styles={customStyles}
      menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
      isLoading={isLoading}
      defaultOptions={defaultOptions}
      components={{ NoOptionsMessage }}
    />
  );
};
