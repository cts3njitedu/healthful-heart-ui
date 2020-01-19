import React from 'react'
import Header from './components/Header'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import LandingPage from './LandingPage'
import LoginFormContainer from './components/forms/LoginFormContainer'

function App() {
    return (


        <BrowserRouter>
            <Provider store={store}>
                <Header />
                {/* <MainContent /> */}
                <Route exact={true} path="/" component={LandingPage} />
                <Route path="/about" component={About} />
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={LoginFormContainer} />


            </Provider>
        </BrowserRouter>


    )
}


export default App