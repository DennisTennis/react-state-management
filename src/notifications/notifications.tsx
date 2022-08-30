import { AppNotification } from 'domain/notification'
import styles from './notifications.module.scss'
import { notificationsStore } from './notifications.store'

const Notifications = () => {
    const {notifications} = notificationsStore

    return (
        <div className={styles['root']}>
            {notifications.map((n: AppNotification, index: number) => (
                <div key={index}>{n.message}</div>
            ))}
        </div>
    )
}

export default Notifications
