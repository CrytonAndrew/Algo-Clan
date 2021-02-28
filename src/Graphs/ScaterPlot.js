import React from 'react'
import {VictoryChart, VictoryVoronoiContainer, VictoryScatter} from "victory"

// Contains a tool tip
const ScaterPlot = () => {
    const redData = [
        { x: 0.12, y: 0.5 }, { x: 0.3, y: 1 }, { x: 0.4, y: 2 }, { x: 0, y: 2 },    
        { x: 2, y: 3 }, { x: 4, y: 4 }, { x: 6, y: 5 }, { x: 1, y: 2 },
        { x: 1.12, y: 1.5 }, { x: 1.3, y: 1 }, { x: 1.4, y: 2 }, { x: 1, y: 2 },
        { x: 3.12, y: 0.5 }, { x: 3.3, y: 2 }, { x: 3.4, y: 3.5 }, { x: 3, y: 3 },
        { x: 4.12, y: 2.5 }, { x: 4.3, y: 3.5 }, { x: 4.4, y: 4.2 }, { x: 4, y: 4.1 },
        ]


    return (
        <div>
            <VictoryChart domain={{ y: [0, 6] }}
            containerComponent={
                <VictoryVoronoiContainer
                mouseFollowTooltips
                voronoiDimension="x"
                labels={({ datum }) => `y: ${datum.y}`}
                />
            }
            >
            <VictoryScatter
                style={{ data: { fill: "red" }, labels: { fill: "red" } }}
                data={redData}
            />
            <VictoryScatter
                data={[
                { x: 2, y: 2 }, { x: 4, y: 3 }, { x: 6, y: 4 }, { x: 8, y: 5 }
                ]}
            />
            </VictoryChart>
        </div>
    )
}

export default ScaterPlot
