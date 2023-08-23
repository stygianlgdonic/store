import Filter from "../Filter";
import ProductItem from "../ProductItem";

function ProductList({
  products,
  handleColorFilterChange,
//   handleAddToCart,
//   handleAddToBasket,
//   handleRemoveFromBasket,
//   handleRemoveAllFromBasket,
  colorFilter,
//   basket,
}: ProductListProps) {
  const filteredProducts = colorFilter
    ? products.filter((product: Product) => product.colour === colorFilter)
    : products;

  return (
    <>
      <Filter
        onColorFilterChange={handleColorFilterChange}
        products={products}
      />
      <div data-testid="t_productslisting">
        {filteredProducts.map((product: Product) => (
          <ProductItem
            key={product.id}
            product={product}
            // handleAddToCart={handleAddToCart}
            // onAddToBasket={handleAddToBasket}
            // onRemoveFromBasket={handleRemoveFromBasket}
            // onRemoveAllFromBasket={handleRemoveAllFromBasket}
            // basketQuantity={basket[product.id] || 0}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
