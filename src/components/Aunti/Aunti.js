import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunti = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h4>Aunti</h4>
            <p>House : {house}</p>
            <button onClick={handleHouseIncrease}>Auntimagic</button>

        </div>
    );
};

export default Aunti;