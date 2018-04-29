import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from  './Home/Home'


const ComponentsNavigator = StackNavigator({
    Home: {
        screen: Home
    },
},{
    initialRouteName: 'Home'
});

export default ComponentsNavigator;