import React from "react";
import { VictoryChart, VictoryStack, VictoryTheme, VictoryArea } from "victory"



class GraphInter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: this.getData() };
    }
  
    componentDidMount() {
      this.setStateInterval = window.setInterval(() => {
        this.setState({ data: this.getData() });
      }, 4000);
    }

    range (start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
  
    getData() {
      return this.range(0, 7).map(() => {
        return [
          { x: 1, y: Math.random(1, 5) },
          { x: 3, y: Math.random(1, 10) },
          { x: 5, y: Math.random(2, 10) },
          { x: 7, y: Math.random(2, 15) },
          { x: 9, y: Math.random(2, 10) },
        ];
      });
    }
  
    render() {
      return (
        <VictoryChart
          theme={VictoryTheme.material}
          animate={{ duration: 1000 }}
        >
          <VictoryStack
            colorScale={"red"}
          >
            {this.state.data.map((data, i) => {
              return (
                <VictoryArea
                  key={i}
                  data={data}
                  interpolation={"basis"}
                />
              );
            })}
          </VictoryStack>
        </VictoryChart>
      );
    }
  }
  

  export default GraphInter
