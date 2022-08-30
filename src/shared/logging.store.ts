import { asGlobalStore } from 'utilities/stores'

export const createStore = () => ({
    async onInitialize() {
        console.log('INIT LOGGING STORE')
    },
    log(message: string) {
        console.log(message)
    },
    error(err: Error) {
        console.error(err.message)
    }
})

export const loggingStore = asGlobalStore(createStore())
