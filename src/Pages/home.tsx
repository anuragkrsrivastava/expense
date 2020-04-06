import React from 'react';
import {useState} from 'react';
import AddExpense from './settings';
import { Interface } from 'readline';
import { string, number } from 'prop-types';
import {Pie} from 'react-chartjs-2'
import {BrowserRouter as Router ,Link, Switch} from 'react-router-dom';

interface Props {
  Category: string;
  ItemName: string;
  Amount: number;
  ExpenseDate: string;
}
function Home<Props>() {
  const InitialTable =[{Category: "", ItemName: "", Amount: 0, ExpenseDate: ""}];
  
  const categoryArray = ['Grocery', 'Electronics', 'Fashion', 'Stationary'];
  
  const FinalTable = [{Category: "Grocery", ItemName: "Bread", Amount: 40, ExpenseDate: "230320"},
  {Category: "Grocery", ItemName: "Bread", Amount: 40, ExpenseDate: "230320"},
  {Category: "Grocery", ItemName: "Rice", Amount: 500, ExpenseDate: "240320"},
  {Category: "Grocery", ItemName: "Vegetables", Amount: 300, ExpenseDate: "243020"},
  {Category: "Grocery", ItemName: "Bread", Amount: 120, ExpenseDate: "240320"},
  {Category: "Fashion", ItemName: "Shirt", Amount: 1200, ExpenseDate: "260320"},
  {Category: "Fashion", ItemName: "Jeans", Amount: 2000, ExpenseDate: "260320"},
  {Category: "Fashion", ItemName: "Perfume", Amount: 2200, ExpenseDate: "260320"},
  {Category: "Electronics", ItemName: "Bulb", Amount: 220, ExpenseDate: "270320"},
  {Category: "Electronics", ItemName: "Tubelight", Amount: 320, ExpenseDate: "270320"},
  {Category: "Electronics", ItemName: "Electric Jug", Amount: 900, ExpenseDate: "270320"},
  {Category: "Stationary", ItemName: "Paper", Amount: 600, ExpenseDate: "290320"},
  {Category: "Stationary", ItemName: "Pen", Amount: 500, ExpenseDate: "290320"},
  {Category: "Grocery", ItemName: "Bread", Amount: 240, ExpenseDate: "010420"},
  {Category: "Grocery", ItemName: "Vegetables", Amount: 600, ExpenseDate: "010420"},
  {Category: "Grocery", ItemName: "Rice", Amount: 1200, ExpenseDate: "010420"}];
  
  const [stateTable, setTable] = useState(InitialTable);
  
  // Setting State of DataTable stores updated value 
  // after clicking Add Expense Button the updated value
  // is pushed in stateDataChart number array
  
  let [DataTable, setDataTable] = useState(0);
  
  var PieData: number[] = [20, 40, 50, 70];
  
  let [stateDataChart, setDataChart] = useState<number[]>([]);
  
  function changeClick(){
    console.log('Pie Chart is created');
  }
  
  return (
    <div className="AppExpense">
      <header>
        <ul><Link to = '/settings'>Settings</Link></ul>
        <ul><Link to = '/profile'>Profile</Link></ul>
        <h1 className = "Heading">Expenseeve</h1>
        <h3>Click to View Pie Chart</h3>
        
        {/* Below is code for Pie Chart but it is not showing the Chart. 
        Code is correct and is compiling but it is still not showing Pie Chart*/}
        
        <button onClick = {(changeClick) => {categoryArray.map( x => {
        setTable(FinalTable.filter(obj => obj.Category == x));
        stateTable.forEach(y => {
          setDataTable(DataTable + y.Amount);
        })
        setDataChart([...stateDataChart, DataTable]);
       })}
      }> Add Expenses </button>
      {/* Till Here is code for Pie Chart */}
        
        {/* Since due to lack of time i didn't work on Backend. 
        So, I have initialized Data Here and 
        using by creating table of that data */}
        <table className = "Table">
          <thead>
            <tr>
              <th>Category</th>
              <th>ItemName</th>
              <th>Amount</th>
              <th>ExpenseDate</th>
            </tr>
          </thead>
          <tbody>
            {FinalTable.map((ExpenseItem)=>(
              <tr>
                <th>{ExpenseItem.Category}</th>
                <th>{ExpenseItem.ItemName}</th>
                <th>{ExpenseItem.Amount}</th>
                <th>{ExpenseItem.ExpenseDate}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <Pie
        data={{
          labels: categoryArray,
          datasets: stateDataChart
        }}
      />
      <br/>
      </header>
    </div>
  );
}
export default Home;
