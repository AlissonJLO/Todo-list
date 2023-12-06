import React from 'react'

const Todo = ({ todo, removetodo, completTodos }) => {
    return (
        <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className='content'>
                <p>{todo.text}</p>
                <p>({todo.category})</p>
                <p></p>
            </div>
            <div className='actions'>
                <button className='complete' onClick={() => completTodos(todo.id)}>Completar</button>
                <button className='remove' onClick={() => removetodo(todo.id)}>Remover</button>
            </div>
        </div>
    )
}

export default Todo