import React from "react";
import {
    VictoryChart, 
    VictoryAxis, 
    VictoryZoomContainer, 
    VictoryLine, 
    VictoryBrushContainer
} from "victory"

class ZoomInOut extends React.Component {
    constructor() {
      super();
      this.state = {
        zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
      };
    }
  
    handleZoom(domain) {
      this.setState({ zoomDomain: domain });
    }
  
    render() {
      return (
        <div>
          <VictoryChart width={600} height={470} scale={{ x: "time" }}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={[
                  { a: new Date(1982, 1, 1), b: 125 },
                  { a: new Date(1987, 1, 1), b: 257 },
                  { a: new Date(1993, 1, 1), b: 345 },
                  { a: new Date(1997, 1, 1), b: 515 },
                  { a: new Date(2001, 1, 1), b: 590 },
                  { a: new Date(2005, 1, 1), b: 670 },
                  { a: new Date(2011, 1, 1), b: 700 },
                  { a: new Date(2015, 1, 1), b: 800 },
                  { a: new Date(2021, 1, 1), b: 1000 }
                ]}
                x="a"
                y="b"
              />
  
            </VictoryChart>
            <VictoryChart
              padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
              width={600} height={100} scale={{ x: "time" }}
              containerComponent={
                <VictoryBrushContainer
                  brushDimension="x"
                  brushDomain={this.state.zoomDomain}
                  onBrushDomainChange={this.handleZoom.bind(this)}
                />
              }
            >
              <VictoryAxis
                tickFormat={(x) => new Date(x).getFullYear()}
              />
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={[
                  { key: new Date(1982, 1, 1), b: 125 },
                  { key: new Date(1987, 1, 1), b: 257 },
                  { key: new Date(1993, 1, 1), b: 345 },
                  { key: new Date(1997, 1, 1), b: 515 },
                  { key: new Date(2001, 1, 1), b: 590 },
                  { key: new Date(2005, 1, 1), b: 670 },
                  { key: new Date(2011, 1, 1), b: 700 },
                  { key: new Date(2015, 1, 1), b: 800 },
                  { key: new Date(2021, 1, 1), b: 1000 }
                ]}
                x="key"
                y="b"
              />
            </VictoryChart>
        </div>
      );
    }
  }
  
export default ZoomInOut