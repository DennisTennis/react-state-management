import { Todo } from 'domain/todo'
import React from 'react'
import { v4 } from 'uuid'
import styles from './add-todo.module.scss'

export type AddTodoProps = {
    addTodo: (todo: Todo, prepend: boolean) => void
}

const AddTodo = (props: AddTodoProps) => {
    const { addTodo } = props
    return (
        <div className={styles['root']}>
            <button
                type='submit'
                onClick={() => {
                    const id = `${v4()}`
                    addTodo({ id, name: id }, true)
                }}
            >
                ADD
            </button>
        </div>
    )
}

export default AddTodo
