import { Todo } from 'domain/todo'
import React from 'react'
import styles from './todo-item.module.scss'

export type TodoItemProps = {
    todo: Todo
    deleteTodo: (todo: Todo) => void
    updateTodo: (todo: Todo) => void
}

const TodoItem = (props: TodoItemProps) => {
    const { todo, updateTodo, deleteTodo } = props

    return (
        <div key={todo.id} className={styles['root']}>
            <input
                className={styles['done']}
                type='checkbox'
                defaultChecked={todo.done}
                onChange={() => updateTodo({ ...todo, done: !todo.done })}
            />
            <span className={styles.name}>{todo.name}</span>
            <button
                className={styles.delete}
                type='submit'
                onClick={() => {
                    deleteTodo(todo)
                }}
            >
                DELETE
            </button>
        </div>
    )
}

export default TodoItem
