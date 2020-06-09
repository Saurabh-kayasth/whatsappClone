import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import MainScreenNavigator from "./App/Config/router";
import Header from "./App/Components/Header";

import Icon from 'react-native-vector-icons/MaterialIcons';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#0e7064" barStyle="light-content" />
        <Header />
        <MainScreenNavigator />
        <TouchableOpacity style={styles.actionContainer}>
          <Icon name="comment" color="#fff" size={22} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  actionContainer: {
    position: "absolute",
    right: 20,
    bottom: 20,
    height: 58,
    width: 58,
    borderRadius: 29,
    backgroundColor: "#4FCE5D",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    elevation: 6
  }
})
