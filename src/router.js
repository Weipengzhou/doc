import React, { Component } from 'react';
import { BrowserRouter as Router,Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './redux/store'
import Slider from './Components/Slider/Slider'


let store = configureStore();// , 

export default class NavRouter extends Component {
    render() {
        return (
                <Provider store={store}>
                    <Router>
                         <Switch>
                                <Slider/>
                         </Switch>
                    </Router>
                </Provider>
        )
    }
}
