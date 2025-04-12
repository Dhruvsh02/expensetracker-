import React from 'react';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((exp, index) => (
        <li key={index}>
          ₹{exp.amount} - {exp.category}
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
