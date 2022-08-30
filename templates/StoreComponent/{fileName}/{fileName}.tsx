import React from 'react'
import { {name}Store } from './{fileName}.store'
import { useStore } from 'utilities/stores'
import styles from './{fileName}.module.scss'

export type {name}Props = {
    
}

const {name} = (props: {name}Props) => {
    const store = useStore({name}Store)
    return (
        <div className={ styles.root }>
            
        </div>
    )
}

export default {name}