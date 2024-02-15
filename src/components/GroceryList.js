import GroceryItem from './GroceryItem.js';

function GroceryList({grocery, deleteG}) {
    return (
      <ul className="grocery-list">
         {grocery.map((item,index) =>(

         
         <GroceryItem 
         item = {item}
         index = {index}
         onDelete = {()=> deleteG(index)}
         />
            
        ))}
     </ul>
    );
  }

  
  export default GroceryList;