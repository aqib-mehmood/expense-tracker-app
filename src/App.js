import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import History from './Components/History';
import NewTransaction from './Components/NewTransction';

function App() {
  return (
    <div>
      <Header></Header>
      <Balance></Balance>
      <IncomeExpense></IncomeExpense>
      <History></History>
      <NewTransaction></NewTransaction>
    </div>
  );
}

export default App;
