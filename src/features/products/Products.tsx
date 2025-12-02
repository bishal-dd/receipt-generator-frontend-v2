import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductsTable } from '@/features/products/ui/Product/ProductsTable';
import { ServicesTable } from '@/features/products/ui/Service/ServicesTable';

export default function Products() {
  return (
    <Tabs defaultValue="products" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
      </TabsList>

      <TabsContent
        value="products"
        className="flex flex-col items-center justify-center w-[100vw] md:w-[80vw] lg:w-[80vw] xl:w-[80vw"
      >
        <ProductsTable />
      </TabsContent>

      <TabsContent
        value="services"
        className="flex flex-col items-center justify-center w-[100vw] md:w-[80vw] lg:w-[80vw] xl:w-[80vw"
      >
        <ServicesTable />
      </TabsContent>
    </Tabs>
  );
}
