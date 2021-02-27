import React, {useState, useCallback} from 'react'

const PositionTracker = () => {
    const width = 960
    const height = 500

    const initialMousePosition = {x: width/2, y: height/2}

    const [mousePosition, setMousePosition] = useState(initialMousePosition)

    const handleMouseMove = useCallback((event) => {
        const {clientY, clientX} = event;
        setMousePosition({x: clientX, y: clientY})
        console.log(clientX, clientY)
    }, [setMousePosition])
    return (
        <div>
            <svg width={width} height={height} onMouseMove={handleMouseMove}>
                <circle 
                    cx={mousePosition.x + 10}
                    cy={mousePosition.y + 10}
                    r={10}
                />
            </svg>
        </div>
    )
}

export default PositionTracker
