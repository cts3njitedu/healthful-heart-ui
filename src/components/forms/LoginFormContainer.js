import React, { Component } from 'react'
import { getLoginPage, handleFormChange} from '../../actions/loginAction'
import { connect } from 'react-redux'
import LoginFormComponent from './LoginFormComponent';

class LoginFormContainer extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this);
    }
    componentDidMount() {
        this.props.getLoginPage();
    }

    handleChange(event) {
        const {name, value, id} = event.target; 
        this.props.handleFormChange({
            name: name,
            value: value,
            id: id
        })
    }

    handleBlur() {
        console.log("Left the textbox");
    }
    render(){
        const { error, loading, fields } = this.props;
        console.log("Fields",fields);
        
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
            if (fields && fields.length > 0) {
                let newFields = Object.assign({},...fields.map(s => ({[s.name]: s})));
                return (
                        <LoginFormComponent 
                            fields={newFields}
                            handleChange={this.handleChange}
                            handleBlur={this.handleBlur} />
                        
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
    
           fields: state.loginForm.page.fields,
           loading: state.loginForm.loading,
           error: state.loginForm.error
        }
        
}

const mapDispatchToProps = {

    getLoginPage,
    handleFormChange

}




export default connect(mapStateToProps,mapDispatchToProps)(LoginFormContainer);