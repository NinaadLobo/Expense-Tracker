import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-amber-300/50 backdrop-blur-xl min-h-screen'>
      <nav className='flex fixed w-full justify-between items-center px-4 py-6 border-b border-black mb-5'>
        <a href="/"><h3 className='text-3xl font-bold font-mono bg-purple-300 rounded-xl px-6 py-4'>Expense Tracker</h3></a>
        <ul className='space-x-5 font-mono'>
          <a className='bg-purple-300 px-5 py-3 rounded-xl' href="/add-expense">Add Expense</a>
          <a className='bg-purple-300 px-5 py-3 rounded-xl' href="/add-income">Add Income</a>
          <a className='bg-purple-300 px-5 py-3 rounded-xl' href="/display-incomes">Display Income</a>
          <a className='bg-purple-300 px-5 py-3 rounded-xl' href="/display-expenses">Display Expense</a>
        </ul>
      </nav>

      <div className='flex justify-center items-center w-full h-[50dvh]'>
        <App />
      </div>
    </div>
  </React.StrictMode>
);


