import React from 'react'
import {Row, Col, Container, Button} from "react-bootstrap"
import Percentage from "../Graphs/PercentageLoader"

const LandingPage = () => {
    return (
        <div className="main-page">
            <Container>
                <Row>
                    <Col md={8}>
                    <h1 id="home">
                    Algo Clan
                    </h1>
                    <h2>“Any sufficiently advanced technology is indistinguishable from magic.” - Aurthur C. Clarke</h2>
                    <Button variant="info" className="btn-lg main-button">
                        Who Are We?
                    </Button>
                    </Col>
                    <Col md={4}>
                        <Percentage />
                        {/* <Image src={`images/carset.jpg`} className="main-img"/> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
