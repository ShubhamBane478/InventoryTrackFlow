import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProducts, createProduct } from '../config/api';
import { Card } from '../components/Card';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export function Products() {
  const queryClient = useQueryClient();
  
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  console.log(products);

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product: Product) => (
          <Card key={product.id} className="p-6">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-600 font-medium">
                ${product.price}
              </span>
              <span className="text-gray-500">
                Stock: {product.quantity}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}