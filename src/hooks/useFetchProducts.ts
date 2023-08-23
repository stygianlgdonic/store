import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/apiSlice';

const useFetchProducts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // TODO 
        dispatch(fetchProducts() as any);
    }, [dispatch]);
};

export default useFetchProducts;
