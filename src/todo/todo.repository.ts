import { Todo } from 'domain/todo'

export const todoRepository = {
    getAll: async () => {
        return await fetch('/api/todos', { method: 'GET' })
            .then((res) => res.json())
            .then((json) => json.todos)
            .catch((err) => console.error(err))
    },
    post: async (data: Todo) => {
        return await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .catch((err) => console.error(err))
    },
    patch: async (id: string, data: Todo) => {
        console.log(data)

        return await fetch('/api/todos/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((json) => json.todo)
            .catch((err) => console.error(err))
    },
    delete: async (id: string) => {
        return await fetch('/api/todos/' + id, {
            method: 'DELETE'
        }).catch((err) => console.error(err))
    }
}
