import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddIncome from './components/addIncome/addIncome';
import AddExpense from './components/addExpense/addExpense';
import DisplayIncomes from './components/displayIncomes/dIsplayIncomes';
import DisplayExpenses from './components/displayExpenses/displayExpenses';
import LandingPage from './components/landingPage/landingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/add-income" element={<AddIncome />} />
        <Route exact path="/add-expense" element={<AddExpense />} />
        <Route exact path="/display-incomes" element={<DisplayIncomes />} />
        <Route exact path="/display-expenses" element={<DisplayExpenses />} />
      </Routes>
    </Router>
  );
}

export default App;
