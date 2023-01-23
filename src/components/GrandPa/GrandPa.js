import React, { createContext, useState } from 'react';
import Aunti from '../Aunti/Aunti';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';

// context api
// 1. call createContext with a default value
// 2. set a variable of the context with upercase
// 3. Make sure you export the context to use it in other places
// wrap your child context using RingContext.Provider
// to consume the context from child component
// useContext hook and you will need to pass the contextName
// Make sure you take notes


export const RingContext = createContext('diamond')

const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h3>Grand Pa</h3>
                <p>house: {house} <button onClick={handleBuyAHouse}>Buy A House</button></p>
                <section style={{ display: 'flex', }
                }>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunti house={house}></Aunti>
                </section>
            </div >
        </RingContext.Provider>
    );
};

export default GrandPa;