import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'
import  StackedPolarBars from "../Graphs/StackedPolarBars"

const ProjectScreen = () => {
    return (
        <div className="lets-go-back">
            <Container>
                <h2 className="sub-headings" id="history"> Lets Go Back A Little </h2>
                <Row className="go-back-section-row">
                    <Col className="go-back-section-col">
                        

                        {/* Minister Stella Ndabeni-Abrahams Talk  */}
                        <h3>Minister Stella Ndabeni-Abrahams Talk </h3>
                        <div className="let-go-back-info">
                        <p> Key Points: Data driven solutions</p>
                        <ul>
                            <li><strong>Drones - Hauling</strong></li>
                            <li>Smart city - Ideas and Plans</li>
                            <li>Data Storage</li>
                            <li>Road Problems</li>
                        </ul>
                        </div>
                    </Col>
                    <Col className="go-back-section-col">
                        {/* <Image src="/images/online_learning.svg" className="go-back-img"/> */}
                        <div className="moving-direction">
                            <StackedPolarBars />
                        </div>
                    </Col>
                </Row>


                <Row className="go-back-section-row">
                    <Col className="go-back-section-col">
                        <Image src="/images/data.svg" className="go-back-img"/>
                    </Col>
                    <Col className="go-back-section-col">
                        <h3>Adi Eyal - Story telling using data</h3>
                        <p>Using data to understand human behavior</p>
                        <p>Key Points:</p>
                        <ul>
                            <li>Provide reference to real world events</li>
                            <li>Data is not the main thing rather its a supporting factor</li>
                            <li>Graphicall representation should be simple and easy to understand</li>
                            <li>Avoid ink</li>
                            <li>Touture the data until it talks</li>
                        </ul>
                    </Col>
                </Row>

                <Row className="go-back-section-row"> 
                    <Col className="go-back-section-col">
                        {/* Pro Ade - Crash Course in Data Science using Python */}
                        <h3>Pro Ade - Crash Course in Data Science using Python </h3>
                        <p>The fundamental matter was one of the main take aways from talk.</p>
                        <ul>
                            <li>Python Lists</li>
                            <li>Conditionals</li>
                            <li>Loops</li>
                        </ul>
                    </Col>
                    <Col className="go-back-section-col">
                        <Image src="/images/online_learning.svg" className="go-back-img"/>
                    </Col>
                </Row>

                <Row className="go-back-section-row">
                    <Col className="go-back-section-col">
                        <Image src="/images/education.svg" className="go-back-img"/>
                    </Col>
                    <Col className="go-back-section-col">
                        <h3>Open Data, Open Research and Inclusive Development - Dr Paul Plantinga</h3>
                        <p>The ideas that data is freely accessible, can be re-used and redistributed by anyone</p>
                        <p>Note: The key point is that when opening up data, the focus is on non-personal data, that is, data which does not contain information about specific individuals.</p>
                    </Col>
                </Row>

                <Row className="go-back-section-row"> 
                    <Col className="go-back-section-col">
                        {/* Design Thinking - Mr Sandile Mahlaba */}
                        <h3>Design Thinking - Mr Sandile Mahlaba</h3>
                        <p>(The white elephant) Key Points:</p>
                        <ul>
                            <li>Empathize</li>
                            <li>Define</li>
                            <li>Ideate</li>
                            <li>Prototype</li>
                            <li>Test</li>
                        </ul>
                    </Col>
                    <Col className="go-back-section-col">
                        <Image src="/images/code_thinking.svg" className="go-back-img"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProjectScreen
