import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import BasketItem from './BasketItem';
import { Link } from 'react-router-dom';
const Basket = () => {
    const { items } = useSelector((state: RootState) => state.cart);
    const totalPrice = items.reduce((acc, item) => {
        const quantity = item.quantity || 1;
        return acc + item.price * quantity
    }, 0)
    return (
        <>
            <h1>CART</h1>
            <Link to={'/'}>Back</Link>
            {
                items.map(item => (
                    <BasketItem
                        key={item.id}
                        product={item}
                    />)
                )

            }
            <p>{`Total: $${totalPrice.toFixed(2)}`}</p>
        </>
    )
}

export default Basket;