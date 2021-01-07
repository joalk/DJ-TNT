import React from 'react';

export const ContainerContext = createContext();

export const ContainerProvider = (props) => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [text, setText] = useState('');
  
  const handleBudgetChange = (e) => {
    let newText = e.target.value
    setText(newText)
    
  }

  const handleBudgetClick = (e) => {
    e.preventDefault();
      setBudget(text);
      setText('');
      
  }

  const handleExpenseSubmit = (nameOfExpense, amountOfExpense) => {
    e.preventDefault();
    //THERE IS A PROBLEM HERE I HAVE FIXED IT SO IT CURRENTLY 
    //DOES NOT BREAKE THE APP BUT ALSO IT DOES NOTHING NOW
    const newExpense = { id: Math.random().toString(), nameOfExpense, amountOfExpense}
    setBudget(obj.expenses.concat(newExpense))
    setBudget( budget - amountOfExpense)
  
  }

  return (
    <div>

    </div>
  );
}

