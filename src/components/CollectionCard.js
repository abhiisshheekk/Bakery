import React from 'react';
import { Button } from 'react-bootstrap';
import './CollectionCard.css'
import { useShoppingCart } from '../Utility/ShoppingCart';

const CollectionCard = ({id, name, desc, image, price}) => {
    const {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
    } = useShoppingCart()
    const quantity = getItemQuantity(id);
    return (
        <div className='collectionCard'>
            <img className='hoverEffect' src={image} alt='' />
            <div className='details'>
                <div className='name'>
                    {name} <div className='id' style={{ fontSize: "12px" }}>{desc}</div>
                </div>
                <div className='priceContainer'>
                    <div className='price'>${price}</div>
                </div>
            </div>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
                        Add To Cart
                    </Button>
                ) : (
                    <div
                        className="d-flex align-items-center flex-column"
                        style={{ gap: ".5rem" }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ gap: ".5rem" }}
                        >
                            <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                        </div>
                        <Button
                            onClick={() => removeFromCart(id)}
                            variant="danger"
                            size="sm"
                        >
                            Remove
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollectionCard;
