import React from 'react';

import './App.css';
import {Header} from './components/Header'
import { IncomeExpenses } from './components/IncomeExpense';
import {Balance} from './components/Balance'
import {TransactionHistory} from './components/TransactionHistory'
import {AddTransaction} from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionHistory/>
        <AddTransaction/>    

      </div>
      
    </GlobalProvider>
  );
}

export default App;
