import React, { Component } from 'react'
import "../../styles/loginform.css"
import { Row, Col, Button } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'
import { submit } from '../../actions/loginAction'


 
class LoginFormComponent extends Component {

    render() {
        // const { error, handleSubmit, pristine, reset, submitting } = this.props
        const { handleSubmit } = this.props
        return (
        
            <form onSubmit={handleSubmit(submit)}>
                <Row>

                    <Col md={2}></Col>
                    <Col md={8}>
                        <div className="loginFormDiv">
                            
                            <div>
                                <label htmlFor="username">Username</label>
                                <Field className="loginText" placeholder="username" name="username" component={renderInput} type="text" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field className="loginText" placeholder="password" name="password" component={renderInput} type="password" />
                            </div>
                            <Button type="submit" className="loginSubmitButton">Submit</Button>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                
            </form>
        )
    }
 
        

    
    
    
}

const renderInput = field =>   // Define stateless component to render input and errors
  <div>
    <input {...field.input} type={field.type} placeholder={field.placeholder} className={field.className}/>  
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
export default reduxForm({
    form: 'loginForm'
})(LoginFormComponent)