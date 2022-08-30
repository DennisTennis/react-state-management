import { AppNotification } from 'domain/notification'
import { loggingStore } from 'shared/logging.store'

import { asGlobalStore } from 'utilities/stores'

const maxLengthNotifications: number = 20

export const createStore = () => ({
    notifications: [] as AppNotification[],
    addNotification(notification: AppNotification) {
        loggingStore.log('add notification ' + notification.id)

        this.notifications =
            this.notifications.length > maxLengthNotifications
                ? [
                      notification,
                      ...this.notifications.slice(0, maxLengthNotifications - 1)
                  ]
                : [notification, ...this.notifications]

        loggingStore.log('notification added')
    },
    deleteNotification(id: string) {
        this.notifications = this.notifications.filter((t) => t.id !== id)
    },
    reset() {
        this.notifications = []
    }
})


export const notificationsStore = asGlobalStore(createStore())