import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../Utility/ShoppingCart";
import { CartItem } from "./CartItem";
import storeItems from "../data.json"

export function SideCart({ isOpen }) {
    const { closeCart, shoppingCart } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {shoppingCart.map(item => (
                        <CartItem id={item.id} quantity={item.quantity} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" $"}
                        {   shoppingCart.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)}
                    </div>
                    <Button>
                        Checkout
                    </Button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}