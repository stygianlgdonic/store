interface Product {
    id: number;
    img: string;
    name: string;
    price: number;
    colour: string;
    quantity?: number;
}

interface ProductItemProps {
    product: Product;
    // basketQuantity: number;
    // handleAddToCart: (product: Product) => void;
    // onAddToBasket: (productId: number) => void;
    // onRemoveFromBasket: (productId: number) => void;
    // onRemoveAllFromBasket: (productId: number) => void;
}

interface ProductListProps {
    products: Product[];
    // handleAddToCart: (product: Product) => void;
    handleColorFilterChange: (selectedColor: string) => void;
    // handleAddToBasket: (productId: number) => void;
    // handleRemoveFromBasket: (productId: number) => void;
    // handleRemoveAllFromBasket: (productId: number) => void;
    colorFilter: string;
    // basket: Basket;
}

interface ProductQuantity {
    [productId: number]: number;
}

interface FilterProps {
    onColorFilterChange: (selectedColor: string) => void;
    products: Product[];
}

interface ProductsSlice {
    products: Product[]
}

interface CartSlice {
    items: Product[]
}