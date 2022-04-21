import React, { useContext } from 'react'
import { CountContext } from '../../App'

const ComponentA = () => {

    const { countDispatch, countState } = useContext(CountContext)

    return (
        <div>
            Component A - {countState}
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button  onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA