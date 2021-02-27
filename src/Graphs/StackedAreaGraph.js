import React from 'react'
import {VictoryChart, VictoryStack, VictoryArea} from "victory"


// using this for area based on how literate one is 

const StackedAreaGraph = () => {
    return (
        <div>
           <VictoryChart
            events={[{
                childName: ["area-1", "area-2"],
                target: "data",
                eventHandlers: {
                onClick: () => {
                    return [{
                    childName: "area-4",
                    mutation: (props) => {
                        const fill = props.style.fill;
                        return fill === "tomato" ? null : {style: {fill: "tomato"}};
                    }
                    }];
                }
                }
            }]}
            >
            <VictoryStack>
                <VictoryArea name="area-1"
                data={[
                    {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
                ]}
                />
                <VictoryArea name="area-2"
                data={[
                    {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}
                ]}
                />
                <VictoryArea name="area-3"
                data={[
                    {x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}, {x: "d", y: 2}
                ]}
                />
                <VictoryArea name="area-4"
                data={[
                    {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 3}, {x: "d", y: 4}
                ]}
                />
            </VictoryStack>
            </VictoryChart> 
        </div>
    )
}

export default StackedAreaGraph
