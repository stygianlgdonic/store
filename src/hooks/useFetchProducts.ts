import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/product';

function useFetchProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setError(null);
      })
      .catch(error => {
        console.error(error);
        setError("Error fetching data. Please try again later.");
      });
  }, []);

  return { products, error };
}

export default useFetchProducts;
