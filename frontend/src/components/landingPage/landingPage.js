import React from 'react';

const LandingPage = () => {
    return (
        <div className='font-mono bg-purple-500/30 border-purple-500 text-black rounded-xl px-6 py-4 border mt-24' >
            <h1>Welcome to Your Expense Tracker</h1>
            <p>This is a simple expense tracking application to help you manage your finances.</p>
            <p className='justify-center'>Use the navigation bar above to access different features:</p>
            <br></br>
            <ul>
                <li>Add Income: Record your sources of income.</li>
                <li>Add Expense: Track your expenses.</li>
                <li>Display Incomes: View your recorded incomes.</li>
                <li>Display Expenses: View your recorded expenses.</li>

            </ul>
        </div>
    );
};

export default LandingPage;
