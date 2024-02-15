import "@picocss/pico";
import './App.css';
import { Toaster } from "react-hot-toast";
import GroceryApp from './components/GroceryApp.js';

function App() {
  return (
    <div className="App">
      <Toaster />
      <GroceryApp />
    </div>
  );
}

export default App;
