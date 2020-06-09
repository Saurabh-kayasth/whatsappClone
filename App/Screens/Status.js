import React, {Component} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import ViewedUpdates from '../Components/ViewedUpdates';
import RecentUpdates from '../Components/RecentUpdates';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Status extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <StatusBar backgroundColor="#0e7064" barStyle="light-content" />

        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.profileStyle}
                source={require('../Assets/p1.jpeg')}
              />
              <View style={styles.addIcon}>
                <Icon name="add" size={17} color="#fff" />
              </View>
            </View>
            <View style={styles.dataConatiner}>
              <Text style={styles.heading}>My status</Text>
              <Text style={styles.subheading}>Tap to add status update</Text>
            </View>
          </View>
        </View>
        <RecentUpdates />
        <ViewedUpdates />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  innerContainer: {
    height: 80,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  profileStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  dataConatiner: {
    width: '78%',
    height: 80,
    paddingLeft: 15,
    paddingTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.7,
    fontFamily: 'Roboto',
  },
  subheading: {
    color: 'gray',
    fontSize: 16,
  },
  addIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#4FCE5D',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    elevation: 5,
  },
});
