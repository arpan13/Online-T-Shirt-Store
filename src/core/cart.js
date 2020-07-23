import React, { useState, useEffect } from 'react'
import "../styles.css"
import API from "../backend";
import Base from "./Base"
import Card from './card';
import { getProducts } from './helper/coreapicalls';
import { loadCart } from './helper/cartHelper';

const Cart = () => {
    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())

    }, [reload])

    const loadAllProducts = () => {
        return (
            <div>
                <h2>This is load products</h2>
                {products.map((product, index) => (
                    <Card
                        key={index}
                        product={product}
                        addtoCart={false}
                        removeFromCart={true}
                        setReload={setReload}
                        reload={reload}
                    />
                ))}
            </div>
        )
    }
    const loadCheckOut = () => {
        return (
            <div>
                <h2>this is CheckOut products</h2>
            </div>
        )
    }



    return (
        <Base title="Cart Page" description="Ready to CheckOut">
            <div className="row text-center">
                <div className="col-6">
                    {loadAllProducts()}
                </div>
                <div className="col-6">
                    {loadCheckOut()}
                </div>
            </div>
        </Base>
    );
}
export default Cart;