import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'

class MainContent extends Component {
    render() {
        return (
            <Grid>
                <Row></Row>
                <Row>
                    <Col></Col>
                    <Col lg={12} className="divMain"><LoginForm /></Col>
                    <Col></Col>
                </Row>
            </Grid>
        )
    }
}




export default MainContent