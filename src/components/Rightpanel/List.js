import React from 'react'

export default function List(props) {
    return (
        <div>
            <ul>{props.expenses.map((item, i) => (
                <li key={item.id}>{item.name} 
                <span>{`$${item.amount}`}</span> 
                <button onClick={props.handleExpenseDelete.bind(null, item.id)}>X</button></li>
            ))}
            </ul>
        </div>
    )
}
