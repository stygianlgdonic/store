import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList";
import { fetchProducts } from "../../redux/apiSlice";
import { Link } from "react-router-dom";

function Home() {
    const [colorFilter, setColorFilter] = useState<string>("");
    const dispatch = useDispatch();
    // any
    const products = useSelector((state: any) => state.api.products);
    // const total = useCalculateTotal(basket, products);
    useEffect(() => {
        // TODO
        dispatch(fetchProducts() as any);
    }, [dispatch]);


    // const handleAddToCart = (product: Product) => {
    //     console.log({ product })
    //     dispatch(addToCart(product));
    // };

    //   const handleRemoveFromCart = (productId: number) => {
    //     dispatch(removeFromCart(productId));
    //   };

    

    // const handleRemoveAllFromBasket = (productId: number) => {
    //     if (basket[productId]) {
    //         const newBasket = { ...basket };
    //         delete newBasket[productId];
    //         setBasket(newBasket);
    //     }
    // };

    const handleColorFilterChange = (selectedColor: string) => {
        setColorFilter(selectedColor);
    };

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
                Product Listings
            </h1>
            <Link to={"/cart"}>CART</Link>
            <ProductList
                products={products}
                handleColorFilterChange={handleColorFilterChange}
                // handleAddToCart={handleAddToCart}
                // handleAddToBasket={handleAddToBasket}
                // handleRemoveFromBasket={handleRemoveFromBasket}
                // handleRemoveAllFromBasket={handleRemoveAllFromBasket}
                colorFilter={colorFilter}
                // basket={basket}
            />
        </div>
    );
}

export default Home;
