import React, { useState } from 'react';

const AddIncome = () => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        category: '',
        description: '',
        date: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:4000/api/v1/add-income`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            alert('Income added successfully');
            setFormData({
                title: '',
                amount: '',
                category: '',
                description: '',
                date: ''
            });
        } catch (error) {
            console.error('Error adding income:', error);
            alert('Failed to add income');
        }
    };

    return (
        <div className='flex flex-col space-y-6 mt-[40dvh] font-mono bg-purple-500/30 px-10 py-8 rounded-xl'>
            <h2 className='text-4xl font-semibold'> Add Income</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required className='p-2 rounded-lg' />
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required className='p-2 rounded-lg' />
                <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required className='p-2 rounded-lg' />
                <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className='p-2 rounded-lg' />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required className='p-2 rounded-lg' />
                <button type="submit" className='bg-black text-white px-4 py-2 hover:scale-110 duration-300 rounded-lg'>Add Income</button>
            </form>
        </div>
    );
};

export default AddIncome;
