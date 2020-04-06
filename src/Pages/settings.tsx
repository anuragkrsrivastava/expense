import React from 'react'
import {useState} from 'react'
import {BrowserRouter as Router ,Link} from 'react-router-dom'

function AddExpense(){
    const categoryArray = ['Grocery', 'Electronics', 'Fashion', 'Stationary'];

    // category is changed to new state when Delete is Clicked
    const [category, state] = useState(categoryArray);
    function handleClick(){
        console.log('Item is Deleted');
    }

    return(
        <div className = 'ExpenseSection'>
            <ul><Link to = '/'>Home</Link></ul>
            <ul><Link to = '/profile'>Profile</Link></ul>
            <header className = "Set">
            <form>
                <label>Total Budget
                    <input type = "number" name = "name"></input>
                </label>
                <input type = "submit" name = "Update"></input>
            </form>
            <label>Category</label>
            <select>{category.map((Category)=>(
                <option>{Category}</option>
            ))}
            <button>Add</button>
            </select>
            </header>
            <header className = "Item">
            <h3> Item Name </h3>
            
            {/* Below is code for setting new state of array of items 
            whenever Delete Button is Clicked*/}
            <p>{category.map((Category)=>(
                <ul>{Category}<button onClick={(handleClick)=>state(category.filter(obj => obj !== Category))}>Delete</button></ul>
            ))}
            </p>
            </header>
        </div>
    );
}
export default AddExpense;