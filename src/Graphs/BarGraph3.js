import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

const BarGraph3 = () => {
  const data = [
    {provinces: 1, literacy: 100},
    {provinces: 2, literacy: 150},
    {provinces: 3, literacy: 350},
    {provinces: 4, literacy: 170},
    {provinces: 5, literacy: 50},
    {provinces: 6, literacy: 70},
    {provinces: 7, literacy: 120},
    {provinces: 8, literacy: 180},
    {provinces: 9, literacy: 350},
  ];

return (
    <div className="BarGraphs">
    <VictoryChart
    // domainPadding will add space to each side of VictoryBar to
    // prevent it from overlapping the axis
    domainPadding={20}
    theme={VictoryTheme.material}
  >
    <VictoryAxis
      // tickValues specifies both the number of ticks and where
      // they are placed on the axis
      tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9 ]}
      tickFormat={["EC", "FS", "Ga", "KZN", "L", "M", "NC", "NW", "WC"]}
    />
    <VictoryBar
            data={data}
            // data accessor for x values
            x="provinces"
            // data accessor for y values
            y="literacy"

            style={{
            data: { fill: "green" }
          }}
        />
            <VictoryAxis
      dependentAxis
      // tickFormat specifies how ticks should be displayed
      tickFormat={(x) => (`${x / 1000}`)}
    />
    </VictoryChart>
    </div>
)
}

export default BarGraph3
