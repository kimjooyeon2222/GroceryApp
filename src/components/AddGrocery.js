import { useState } from 'react';

function AddGrocery({ onAdd }) {


  const [newGrocery, setNewGrocery] = useState("");

  const addGrocery = () => {
    if (newGrocery) {
      onAdd(newGrocery);
      setNewGrocery("");
    }
  };


  return (
    <div className='add-grocery'>
      <input
        type="text"
        value={newGrocery}
        onChange={(event) => setNewGrocery(event.target.value)}
        placeholder="Add a new grocery item"
      />
      <button onClick={addGrocery}>Add Grocery</button>
    </div>
  );
}

export default AddGrocery;