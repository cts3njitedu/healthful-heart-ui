import React, { Component } from 'react'


class LoginUserName extends Component {
    
    render() {
        return (
            <div>
                <label htmlFor="username">Username: </label> <span></span>
                <input type="text" id={this.props.field.id} name={this.props.field.name} value={this.props.field.value} placeholder="Username" onChange={this.props.handleChange} onBlur={this.props.handleBlur} />
                {/* {this.props.errors.username.map((error) => <p key={error}>{error}</p>)} */}
            </div>
        )
    }
    
}



export default LoginUserName;