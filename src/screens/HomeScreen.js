import React, {useState} from 'react'
import {Container} from "react-bootstrap"
// import colors from "../data/NamesColors.csv"
// import CSVReader from "react-csv-reader"

const HomeScreen = () => {
    const width = 960
    const height = 500

    const initialMousePosition = {x: width/2, y: height/2}

    const [mousePosition, setMousePosition] = useState(initialMousePosition)

    const handleMouseMove = (event) => {
        const {clientY, clientX} = event;
        setMousePosition({x: clientX, y: clientY})
        console.log(clientX, clientY)
    }

    return (
        <Container>
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
            <circle 
                cx={mousePosition.x + 10}
                cy={mousePosition.y + 10}
                r={10}
            />
        </svg>
        {/* <CSVReader onFileLoaded={(colors, fileInfo) => console.dir(colors, fileInfo)} /> */}
      </Container>
    )
}

export default HomeScreen
