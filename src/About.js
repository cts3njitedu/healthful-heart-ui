import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAboutPage } from './actions/aboutAction'
class About extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.isAccessTokenEnabled) {
            this.props.history.push("/login")
        } else {
            this.props.getAboutPage()
        }
        
    }

    render() {
        return (
            <div>This is the about page</div>
        )
    }

}

function mapStateToProps(state) {
    return {
  
      isAccessTokenEnabled: state.user.isAccessTokenEnabled
    }
  
  }



  const mapDispatchToProps = {

    getAboutPage

}

export default connect(mapStateToProps,mapDispatchToProps)(About);