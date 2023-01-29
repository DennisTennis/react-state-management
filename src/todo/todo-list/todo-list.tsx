import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from 'utilities/stores'
import { AddTodo } from './add-todo'
import { TodoItem } from './todo-item'
import styles from './todo-list.module.scss'
import { todoListStore } from './todo-list.store'

const TodoList = () => {
    const history = useNavigate()
    const store = useStore(todoListStore)

    useEffect(() => store.setHistory(history), [store, history])

    return (
        <div className={styles['root']}>
            <AddTodo addTodo={store.addTodo} />
            <ul className={styles['todo-table']}>
                {store.todos.map((t, index) => (
                    <TodoItem
                        key={index}
                        deleteTodo={store.deleteTodo}
                        updateTodo={store.updateTodo}
                        todo={t}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
