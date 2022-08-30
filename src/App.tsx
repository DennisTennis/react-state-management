import Notifications from 'notifications'
import { TodoList } from 'todo/todo-list'
import { withObserver } from 'utilities/stores'
import styles from './app.module.scss'

function App() {
    return (
        <div className={styles['app-container']}>
            <div className={styles['container']}>
                <TodoList />
            </div>
            <div className={styles['container']}>
                <Notifications />
            </div>
        </div>
    )
}

export default withObserver(App)
