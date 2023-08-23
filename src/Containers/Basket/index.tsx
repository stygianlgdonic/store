import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import BasketItem from './BasketItem';
import { Link } from 'react-router-dom';
import backBtn from '../../assets/icons/backbtn.svg'
const Basket = () => {
    const { items } = useSelector((state: RootState) => state.cart);
    const totalPrice = items.reduce((acc, item) => {
        const quantity = item.quantity || 1;
        return acc + item.price * quantity
    }, 0)
    return (
        <div className='p-4'>
            <div className='flex justify-between w-1/2'>
                <Link to={"/"} className="flex hover:bg-gray-300 h-14 w-14 rounded-xl justify-center">
                    <img src={backBtn} alt="Back" width={30} height={30} />
                </Link>
                <div className='flex justify-between gap-x-2'>
                    <p className="text-4xl font-bold mb-6 text-center text-green-600">Shopping Cart</p>
                    <p className="text-xl text-green-600">{`(${items.length})`}</p>
                </div>
            </div>
            {
                items.map(item => (
                    <BasketItem
                        key={item.id}
                        product={item}
                    />)
                )

            }
            <p className="text-2xl font-bold mb-6 text-right">{`Total: $${totalPrice.toFixed(2)}`}</p>
        </div>
    )
}

export default Basket;