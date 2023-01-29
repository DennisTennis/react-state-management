import { useLocalStore } from '.'
import { useEffect } from 'react'

export type StoreInitializer<TStore> = (() => TStore)

export const useStore = <TStore>(store: StoreInitializer<TStore>): TStore => {
    const localStore = useLocalStore<any>(() => store())

    useEffect(() => {
        if (localStore.onInitialize) {
            const initializer = async() => await localStore.onInitialize()
            initializer()
        }

        return localStore.onUnmount
    }, [localStore])

    return localStore
}