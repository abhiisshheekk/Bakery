import { Stack } from 'react-bootstrap';
import storeItems from '../data.json';

export function CartItem({ id, quantity }) {
    const item = storeItems.find(i => i.id === id);
    console.log({Name: item.name, Description: item.description, Price: item.price, Count: quantity});
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} className="card-img" alt="..." style={{width: "125px", height: "75px"}} />
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                </div>
                <div style={{ textAlign: "right" }}>x{quantity}</div>
            </div>
        </Stack>
    )
}