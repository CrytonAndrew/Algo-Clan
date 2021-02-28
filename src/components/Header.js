import React from 'react'
import {Navbar, Nav, FormControl, Form, Button, Container} from "react-bootstrap"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Algo Clan</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#history">History</Nav.Link>
                <Nav.Link href="#data-visualizaion">Data Visualization</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Container>
            </Navbar>  
        </div>
    )
}

export default Header
