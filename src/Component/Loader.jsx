

import React, { useEffect, useState } from "react";
import axios from 'axios';
export const Loader = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalProduct, setTotalProduct] = useState(0);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        const productData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
                console.log(data)
                setProducts(data.products)
                setTotalProduct(data.total)

            } catch (error) {
                console.log(error.message);
               
            }
            finally{
                setLoading(false);
            }
        }
        productData();
    }, [limit])

    if (loading) {
        return <p>Loading...</p>
    }

    const addMore = () => {
        if (products.length < totalProduct) {
            setLimit((prevlimit) => prevlimit + 10)
        }
    }
    return (
        <>
            {
                products.map((item) => {
                    return (
                        <ul>
                            <div key={item.id}>

                                <li>{item.id}</li>
                                <li>{item.description}</li>

                            </div>
                        </ul>

                    )

                })
            }


            {totalProduct !== 0 && (
                <button onClick={addMore} disabled={products.length >= totalProduct}>
                    Add More
                </button>
            )}
        </>
    )
}
