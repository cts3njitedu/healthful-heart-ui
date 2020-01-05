import React from 'react'


function LoginPassword(props) {
    return (
        <div>
            <label htmlFor="password">Password: </label> <span></span>
            <input type="text" id={props.field.id} name={props.field.name} value={props.field.value} placeholder="Password" onChange={props.handleChange} onBlur={props.handleBlur} />
            {/* {this.props.errors.password.map((error) => <p key={error}>{error}</p>)} */}
        </div>
    )
}


export default LoginPassword