import { v4 } from 'uuid'
/* eslint-disable */
import { createServer, Model } from 'miragejs'

export default function () {
    createServer({
        models: {
            todo: Model
        },
        seeds(server) {
            for (let index = 0; index < 10; index++) {
                const id = `${v4()}`
                server.create('todo', { id: id, name: id, done: false })                    
            }            
        },
        routes() {
            this.namespace = 'api'

            this.post('/todos', (schema, request) => {
                let attrs = JSON.parse(request.requestBody)

                return schema.todos.create(attrs)
            })

            this.patch('/todos/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody)
                let id = request.params.id
                let todo = schema.todos.find(id)

                return todo.update(newAttrs)
            })

            this.get('/todos')
            this.get('/todos/:id')
            this.del('/todos/:id')
            this.put('/todos/:id')
        }
    })
}
