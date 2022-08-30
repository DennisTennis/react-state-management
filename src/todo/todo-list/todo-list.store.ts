import { Todo } from 'domain/todo'
import { notificationsStore } from 'notifications/notifications.store'
import { NavigateFunction } from 'react-router-dom'
import { loggingStore } from 'shared/logging.store'

import { todoRepository } from 'todo/todo.repository'
import { v4 } from 'uuid'

const maxLengthTodos: number = 20

export const todoListStore = () => ({
    history: {} as NavigateFunction,
    setHistory(history: NavigateFunction) {
        this.history = history
    },
    todos: [] as Todo[],
    async onInitialize() {
        loggingStore.log('INIT TODO')

        this.setTodos(
            await todoRepository
                .getAll()
                .catch((err) => loggingStore.error(err))
        )

        this.todos.forEach((todo) => {
            notificationsStore.addNotification({
                id: v4(),
                message: `${todo.name?.substring(0, 8)} added`
            })
        })
    },
    onUnmount: () => {
        loggingStore.log('UNMOUNT TODO')
    },
    setTodos(todos: Todo[]) {
        this.todos =
            todos.length > maxLengthTodos
                ? [...todos.slice(0, maxLengthTodos - 1)]
                : todos
    },
    async addTodo(todo: Todo, prepend: boolean = false) {
        const newData = prepend
            ? [{ ...todo, done: false }, ...this.todos]
            : [...this.todos, { ...todo, done: false }]

        this.setTodos(newData)

        notificationsStore.addNotification({
            id: todo.id,
            message: `${todo.name?.substring(0, 8)} added`
        })

        await todoRepository.post(todo).catch((err) => loggingStore.error(err))
    },
    async deleteTodo(todo: Todo) {
        this.setTodos(this.todos.filter((t) => t.id !== todo.id))
        notificationsStore.addNotification({
            id: v4(),
            message: `${todo.name?.substring(0, 8)} deleted`
        })

        await todoRepository
            .delete(`${todo.id}`)
            .catch((err) => loggingStore.error(err))
    },
    async updateTodo(todo: Todo) {
        const idx = this.todos.findIndex((t) => t.id === todo.id)
        this.setTodos(Object.assign([...this.todos], { [idx]: todo }))

        notificationsStore.addNotification({
            id: v4(),
            message: `done ${todo.name?.substring(0, 8)} updated to ${
                todo.done
            }`
        })

        await todoRepository
            .patch(`${todo.id}`, { done: todo.done })
            .catch((err) => loggingStore.error(err))
    }
})
