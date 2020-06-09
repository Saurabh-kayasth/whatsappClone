import React, { Component } from "react";
import {
    View,
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Videos from "../Components/Chats";

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1 }}>
                <Videos />
                <StatusBar backgroundColor="#0e7064" barStyle="light-content" />
            </View>
        )
    }
}

