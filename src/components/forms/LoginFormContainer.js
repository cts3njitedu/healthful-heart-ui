import React, { Component } from 'react'
import { getLoginPage, handleFormChange, handleFormBlur, handleSubmit} from '../../actions/loginAction'
import { connect } from 'react-redux'
import LoginFormComponent from './LoginFormComponent';
import { convertLoginFields } from '../../selectors/loginFormSelector';
import {isEqual} from 'lodash'
class LoginFormContainer extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            fields: {}
        }
    }
    componentDidMount() {
        if (this.props.match.url === "/logout") {

        } else {
            this.props.getLoginPage(this.props.match.url);
        }
        
    }

    componentDidUpdate (prevProps) {
        if (localStorage.getItem("accessToken")!=null){
            this.props.history.push("/")
        }
        if (!isEqual(prevProps.fields, this.props.fields)) {
            this.setState({fields:this.props.fields })
        }
    }
    handleChange(event) {
        const {name, value, id} = event.target; 
    
        this.props.handleFormChange({
            name: name,
            value: value,
            id: id
        })
    }

    handleBlur(event) {
        const {name, value, id} = event.target
        this.props.handleFormBlur({
            [name]: this.state.fields[name]
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.fields, this.props.match.url)
    }
    render(){
        const { error, loading, fields, submitting, submitError, pageErrors } = this.props;
        
        if (submitting) {
            return (
                <div>Submitting...</div>
            )
        }
        if (loading) {
            return (
                <div>Loading...</div>
            )
        }
        if (error) {
            return (
                <div>Error getting page...</div>
            )
        }
        else{
            if (fields !== null) {
                console.log("State has changed: ", this.state.fields)
                return (
                    <div>
                        
                        <LoginFormComponent 
                            fields={fields}
                            submitting= {submitting}
                            pageErrors = {pageErrors}
                            handleChange={this.handleChange}
                            handleBlur={this.handleBlur}
                            handleSubmit={this.handleSubmit} />
                    </div>
                        
                        
                )
            }
            return(
                <div>Still haven't recieved all data...</div>
            )
        }
    }

}






function mapStateToProps(state) {
    return {
    
           fields: convertLoginFields(state),
           loading: state.loginForm.loading,
           error: state.loginForm.error,
           submitting: state.loginForm.submitting,
           submitError: state.loginForm.submitError,
           pageErrors: state.loginForm.page.errors
        }
        
}

const mapDispatchToProps = {

    getLoginPage,
    handleFormChange,
    handleFormBlur,
    handleSubmit

}




export default connect(mapStateToProps,mapDispatchToProps)(LoginFormContainer);