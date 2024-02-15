import React, { useState } from 'react';
import AddGrocery from './AddGrocery';
import GroceryList from './GroceryList';
import Recommend from './Recommend';




function GroceryApp() {


    const [grocery, setGrocery] = useState([]);

    const addGrocery = (newGrocery) => {
        setGrocery([...grocery, newGrocery]);
    };

    const deleteGrocery = (index) => {
        const updatedGrocery = grocery.filter(
            (_, groceryIndex) => groceryIndex !== index
        );
        setGrocery(updatedGrocery);
    };

    return (
        <div className="app-container">
            <div className="grocery-container">
                <h1>Grocery List</h1>
                <AddGrocery onAdd={addGrocery} />
                <GroceryList grocery={grocery} deleteG={deleteGrocery} />
            </div>

            <div className="chatbot-container">
                <Recommend grocery={grocery}/>
            </div>
        </div>
    );
}

export default GroceryApp;