import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

const BarGraphs = () => {
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];

    return (
        <div>
        <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryBar
                data={data}
                // data accessor for x values
                x="quarter"
                // data accessor for y values
                y="earnings"
            />
                <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        </VictoryChart>
        </div>
    )
}

export default BarGraphs
