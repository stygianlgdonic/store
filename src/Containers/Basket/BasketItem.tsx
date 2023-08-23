import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";

const BasketItem = ({
    product
}: ProductItemProps) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state: RootState) => state.cart);
    const { id, img, name, price, quantity } = product;
    const isDisabled = !!(quantity && quantity < 2);

    const handleAddToProductQuantity = () => {
        const updatedItems = items.map(item => {
            const productQuantity = product.quantity || 1;
            if (item.id === id) {
                return { ...product, quantity: productQuantity + 1 }
            } else {
                return item;
            }
        })
        dispatch(updateCart(updatedItems));
    };

    const handleRemoveFromProductQuantity = () => {
        const updatedItems = items.map(item => {
            const productQuantity = product.quantity || 1;
            if (item.id === id) {
                return { ...product, quantity: productQuantity - 1 }
            } else {
                return item;
            }
        })
        dispatch(updateCart(updatedItems));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id))
    }


    return (
        <div className="border p-4 flex items-center justify-between mb-4 rounded">
            <div className="flex items-center">
                <img src={img} alt={name} className="w-16 h-24 mr-4 rounded" />
                <div className="flex flex-col gap-y-5">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p>{`Price: $${price.toFixed(2)}`}</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-5">
                <p className="font-semibold">{`Quantity: ${quantity || 1}`}</p>
                <div className="flex space-x-1">
                    <button
                        onClick={handleRemoveFromProductQuantity}
                        className={
                            "bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors w-10"
                        }
                        disabled={isDisabled}
                    >
                        {"-"}
                    </button>
                    <button
                        onClick={handleAddToProductQuantity}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors w-10"
                    >
                        {"+"}
                    </button>
                </div>
                <button
                    onClick={handleRemoveFromCart}
                    className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default BasketItem;
