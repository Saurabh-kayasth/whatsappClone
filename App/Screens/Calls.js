import React, { Component } from "react";
import {
    View,
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Calls from "../Components/Calls";

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class CallScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1 }}>
                <Calls/>
                <StatusBar backgroundColor="#0e7064" barStyle="light-content" />
            </View>
        )
    }
}
