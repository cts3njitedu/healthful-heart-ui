import React, { Component } from 'react'
import "../../styles/loginform.css"
import { Button, Form, FormGroup } from 'react-bootstrap'
import LoginUserName from './LoginUserName'
import LoginPassword from './LoginPassword'



class LoginFormComponent extends Component {

    constructor(props) {
        super(props)
        console.log("Display", this.props);
    }

    render() {
        return (

            // <Row>

            //     <Col md={2}></Col>
            //     <Col md={8}>
            <Form>
                <div className="loginFormDiv">
                    <FormGroup><LoginUserName field={this.props.fields.username} handleChange={this.props.handleChange} handleBlur={this.props.handleBlur} /></FormGroup>
                    <LoginPassword field={this.props.fields.password} handleChange={this.props.handleChange} handleBlur={this.props.handleBlur} />
                    <Button type="submit" >Submit</Button>

                </div>
            </Form>

            //     {/* </Col>
            //     <Col md={2}></Col>
            // </Row> */}
        )
    }






}


export default LoginFormComponent