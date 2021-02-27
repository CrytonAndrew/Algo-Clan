import React from 'react'
import {Row, Col, Container} from "react-bootstrap"
import BarGraphs from "../Graphs/BarGraphs"
import StackedBar1 from "../Graphs/StackedBar1"
import StackedAreaGraph from "../Graphs/StackedAreaGraph"
import ScaterPlot from "../Graphs/ScaterPlot"
import BarGraphWithToolTip from "../Graphs/BarGraphWithToolTip"
import Histogram from "../Graphs/Histogram"
import GraphInter from "../Graphs/GraphInter"
import Perctage from "../Graphs/PercentageLoader"
import Alternative from "../Graphs/Alternative"
import ZoomInOut from "../Graphs/ZoomInOutLine"
import StackedBars from "../Graphs/StackedBars"
import StackedPolarBars from "../Graphs/StackedPolarBars"

const HomeScreen = () => {
  
  return (
    <Container>
      <Row>
        <Col>
        <BarGraphs />
        </Col>
        <Col>
          <StackedBar1/>
        </Col>
      </Row>
      <Row>
        <Col>
          <StackedAreaGraph/>
        </Col>
        <Col>
          <ScaterPlot/>
        </Col>
      </Row>
      <Row>
        <Col>
          <BarGraphWithToolTip/>
        </Col>
        <Col>
          <Histogram/>
        </Col>
      </Row>
      <Row>
        <Col>
          <GraphInter/>
        </Col>
        <Col>
          <Perctage/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alternative/>
        </Col>
        <Col>
          <ZoomInOut />
        </Col>
      </Row>
      <Row>
        <Col>
          <StackedBars/>
        </Col>
        <Col>
          <StackedPolarBars/>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen
