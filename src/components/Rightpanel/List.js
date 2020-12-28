import React from 'react'

export default function List(props) {
    return (
        <div>
            <ul>{props.expenses.map((item, i) => (
                <li key={i}>{item.name} {`$${item.amount}`} <button onClick={props.handleExpenseDelete}key={i}>X</button></li>
            ))}
            </ul>
        </div>
    )
}
