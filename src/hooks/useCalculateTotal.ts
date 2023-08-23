import { useState, useEffect } from 'react';

function useCalculateTotal(basket: Basket, products: Product[]) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let newTotal = 0;
        for (const productId in basket) {
            const product = products.find(p => p.id === Number(productId));
            if (product) {
                newTotal += product.price * basket[productId];
            }
        }
        setTotal(newTotal);
    }, [basket, products]);

    return total;
}

export default useCalculateTotal;
