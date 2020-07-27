import React from 'react'
import Todos from './Todos'
function TodoContainer({todos, handleDeleteClick}) {
    return (
        <> 
        <ul className="z-depth-5 collection with-header">
        
        <li className="collection-header center"><h5>Your Todos</h5></li>
        <Todos todos={todos} handleDeleteClick={handleDeleteClick} />
        </ul>
        </>
    )
}

export default TodoContainer
