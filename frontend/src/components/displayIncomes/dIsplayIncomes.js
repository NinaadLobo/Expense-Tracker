import React, { useState, useEffect } from 'react';

const DisplayIncomes = () => {
    const [incomes, setIncomes] = useState([]);

    useEffect(() => {
        const fetchIncomes = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/v1/get-incomes")
                const data = response.json().then((res) => {
                    setIncomes(res)
                });


            } catch (error) {
                console.error('Error fetching incomes:', error);
            }
        };

        fetchIncomes();
    }, []);

    return (
        <div className='flex flex-col gap-5 mx-10 mt-[10dvh]'>
            <h2 className='text-4xl font-semibold underline font-mono'>Incomes</h2>
            <ul className='grid grid-cols-4 gap-8'>
                {incomes.map((expense) => (
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

export default DisplayIncomes;
