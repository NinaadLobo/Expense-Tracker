import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/v1/get-expenses")
                response.json().then((res) => {
                    console.log(res);
                    setExpenses(res)
                });

            } catch (error) {
                console.error('Error fetching expenses:', error);
            }
        };

        fetchExpenses();
    }, []);

    return (
        <div className='flex flex-col gap-5 mt-[10dvh]'>
            <h2 className='text-4xl font-semibold underline font-mono'>Expenses</h2>
            <ul className='grid grid-cols-4 gap-8'>
                {expenses.map((expense) => (
                    <li key={expense._id} className="border border-black rounded-xl p-4 bg-purple-500/30 font-mono">
                        <div>Title: {expense.title}</div>
                        <div>Amount: {expense.amount}</div>
                        <div>Category: {expense.category}</div>
                        <div>Description: {expense.description}</div>
                        <div>Date: {new Date(expense.date).toLocaleDateString()}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayExpenses;
