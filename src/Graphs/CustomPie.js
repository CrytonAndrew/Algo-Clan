import React from "react"
import {VictoryLabel, VictoryTooltip, VictoryPie} from "victory"

class CustomLabel extends React.Component {
    render() {
      return (
        <g>
          <VictoryLabel {...this.props}/>
          <VictoryTooltip
            {...this.props}
            x={200} y={250}
            orientation="top"
            pointerLength={0}
            cornerRadius={50}
            flyoutWidth={100}
            flyoutHeight={100}
            flyoutStyle={{ fill: "black" }}
          />
        </g>
      );
    }
  }
  
  CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
  
  
  class CustomPie extends React.Component {
    render() {
      return (
          <VictoryPie
            style={{ labels: { fill: "white" } }}
            innerRadius={100}
            labelRadius={120}
            labels={({ datum }) => (datum === 0 ? null: `${datum.y}%`)}
            labelComponent={<CustomLabel />}
            data={[
              { x: 1, y: 75 },
              { x: 2, y: 25 },
              { x: 3, y: 0 },
              { x: 4, y: 0 },
              { x: 5, y: 0 }
            ]}
          />
      );
    }
  }
  
  export default CustomPie