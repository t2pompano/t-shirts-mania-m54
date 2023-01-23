import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p><small>House {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>
        </div>
    );
};

export default Special;