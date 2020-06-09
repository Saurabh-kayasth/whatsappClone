import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ViewedUpdatesData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.profileStyle}
            source={require('../Assets/p1.jpeg')}
          />
          <View style={styles.dataConatiner}>
            <Text style={styles.name}>Saurabh</Text>
            <Text style={styles.lastMessage}>Today, 4:34 pm</Text>
          </View>
        </View>
      </View>
    );
  }
}

class ViewedUpdates extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let datasource = [1, 1, 1];
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Viewed Updates</Text>
        </View>
        <FlatList
          data={datasource}
          renderItem={({item, index}) => {
            return <ViewedUpdatesData />;
          }}
        />
      </View>
    );
  }
}

export default ViewedUpdates;
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
    width: '88%',
    height: 80,
    paddingLeft: 15,
    paddingTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.7,
    fontFamily: 'Roboto',
  },
  lastMessage: {
    color: 'gray',
    fontSize: 16,
  },
  time: {
    fontSize: 12,
  },
  timeContainer: {
    height: 80,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
    paddingTop: 15,
  },
  header: {
    width: '100%',
    height: 34,
    backgroundColor: '#efefef',
    padding: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    color: '#727272',
    fontWeight: 'bold',
  },
});
