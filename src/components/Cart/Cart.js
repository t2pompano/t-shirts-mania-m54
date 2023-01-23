import React from 'react';
import './Cart.css';
const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options:
    // 1. Element variable
    // 2.ternary operator condition ? true :false
    // 3. && operator(shorthand)
    // 4. || operator
    let command;
    if (cart.length === 0) {
        command = <p>Please Add some!!!!!!!!!!</p>
    }
    else if (cart.length === 1) {
        command = <div>
            <h5>oh hello, spend some</h5>
            <p>Please Add more ........</p>
        </div>
    }
    else {
        command = <p><small>Thanks for adding Items</small></p>
    }
    return (
        <div>
            <h2>Items Selected : {cart.length}</h2>

            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='blue'> yay you are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h4>Tirgonal</h4>
                <p>
                    Goood job Buying for Three person
                </p>

            </div>}
            {command}
            {cart.length !== 4 ? <p> keep Addign</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='green'>Reveiw Item</button>}
        </div>
    );
};

export default Cart;