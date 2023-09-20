// Stateless
// React Hook
import { useState } from "react";
function Product(props){ // properties
    const product = props.product;
    const [count,setCount] = useState(0);
    const add = () => { // arrow function
        setCount(count+1);
    }
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{count}</p><button onClick={add} type="button">Add</button>
        </div>
    )
}
export default Product;