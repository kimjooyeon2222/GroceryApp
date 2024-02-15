
function GroceryItem({item,onDelete}) {
    return (
      
         <li className="grocery-item">
          {item}
          <button onClick={onDelete}>Delete</button>
         </li> 
      
    );
  }
  
  export default GroceryItem;