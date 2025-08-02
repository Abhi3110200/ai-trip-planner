import React from "react"

const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of your budget',
        icon: '₹',
        color: 'bg-green-100 text-green-600'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Stay conscious of your budget',
        icon: '₹',
        color: 'bg-green-100 text-green-600'
    },
    {
        id: 3,
        title: 'Expensive',
        desc: 'Stay conscious of your budget',
        icon: '₹',
        color: 'bg-green-100 text-green-600'
    }
]
function BudgetUi({ onSelectOption }: any) {
    return (
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 mt-1 items-center">
            {SelectBudgetOptions.map((item, index) => (
                <div key={index} onClick={() => onSelectOption(item.title + " " + item.desc)} className='p-3 border rounded-2xl flex items-center text-center flex-col bg-white cursor-pointer hover:border-primary hover:text-primary transition-all'>
                    <div className={`text-3xl p-3 rounded-full ${item.color}`}>{item.icon}</div>
                    <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
                    <p className='text-sm text-gray-500'>{item.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default BudgetUi