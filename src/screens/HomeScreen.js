import React from 'react'
import {Row, Col, Container} from "react-bootstrap"
import BarGraphs from "../Graphs/BarGraphs"
import StackedBar1 from "../Graphs/StackedBar1"
import StackedAreaGraph from "../Graphs/StackedAreaGraph"
import ScaterPlot from "../Graphs/ScaterPlot"

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
    </Container>
  )
}

export default HomeScreen
