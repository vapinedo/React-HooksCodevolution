import React, { useState, useEffect } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = event => {
        console.log('Mouse event')
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])
    
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>

    )
}

export default HookMouse