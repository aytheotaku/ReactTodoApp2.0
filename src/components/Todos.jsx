import React from 'react'

function Todos({todos, handleDeleteClick}) {
    

    const todoList = todos.length !== 0 ?
    todos.map(todo=><li style={{transition:"all 0.5s ease-in", borderTop:"1px solid black"}} key={todo.id} id={todo.id} className="collection-item">
    <div>{todo.content}<a href="#!" onClick={handleDeleteClick} className="secondary-content purple-text"><i className="material-icons">close</i>
    </a>
    </div>
    </li>): <li className="collection-item center">you have no todos</li>

    return (
        <>
        {todoList}
        </>
    )
}

export default Todos
