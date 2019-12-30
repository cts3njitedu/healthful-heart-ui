import React, { Component } from 'react'
import "../styles/loginform.css"
import { Row, Col, Button } from 'react-bootstrap'


class LoginForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Sugar Honey Ice Tea")
    }
    render() {
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <div className="loginFormDiv">
                                <input
                                    type="text"
                                    placeholder="username"
                                    className="loginText"
                                >

                                </input>
                                <input
                                    type="text"
                                    placeholder="password"
                                    className="loginText">

                                </input>
                                <Button type="submit" className="loginSubmitButton">Submit</Button>
                            </div>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    
                </form>
            
        )
    }
}



export default LoginForm