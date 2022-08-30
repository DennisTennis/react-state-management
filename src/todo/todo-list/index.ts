import { withObserver } from 'utilities/stores'
import { default as Component } from './todo-list'

export const TodoList = withObserver(Component)
