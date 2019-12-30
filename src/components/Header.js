import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'


class Header extends Component {
    render() {
        return (
            <Jumbotron style={{textAlign:'center'}}>
                <div>Welcome to Healthful Heart Application</div>
            </Jumbotron>
        )
    }
}


export default Header