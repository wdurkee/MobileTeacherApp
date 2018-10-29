import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import ListSelect from '../components/ListSelect';
import { ListItem, List, ListDescription, ListSection, ListImage } from '../components/common';


class TopicScreen extends React.Component {
  static navigationOptions = {
    headerRight: null,
    title: 'English'
  };


  render() {
    


    return (

      <View style={{ flex: 1 }}>
        <List>
          <ListSection headerText='Beginning English'>
            <ListItem
              title={'Mobile Teacher: People Playing Cards for teaching English'}
              author={'mobileteacher'}
              length={'2:49'}
              onPress={() => this.props.navigation.navigate('Video', { author: 'mobileteacher', title: 'Mobile Teacher: People Playing Cards for teaching English', length: '2:49'})}
             />
            <ListItem
              title={'Mobile Teacher: Action Pictures for teaching English'}
              author={'mobileteacher'}
              length={'2:12'}
              onPress={() => this.props.navigation.navigate('Video', { author: 'mobileteacher', title: 'Mobile Teacher: Action Pictures for teaching English', length: '2:12'})}
            />
            <ListItem
              title={'Mobile Teacher: Balloon Toss for teaching English'}
              author={'mobileteacher'}
              length={'2:46'}
              onPress={() => this.props.navigation.navigate('Video', { author: 'mobileteacher', title: 'Mobile Teacher: Balloon Toss for teaching English', lenght: '2:46'})}
            />
            <ListItem
              title={'Mobile Teacher: Alphabet Squares for teaching English'}
              author={'mobileteacher'}
              length={'2:56'}
              onPress={() => this.props.navigation.navigate('Video', { author: 'mobileteacher', title: 'Mobile Teacher: Alphabet Squares for teaching English', lenght: '2:56'})}
            />
          </ListSection>
        </List>
    </View>

    );
  }
}


const styles = {
  totalStyle: {
    paddingTop: 30,
    paddingLeft: 200,
    fontSize: 14,
    fontWeight: 'bold'
  },
  imageStyle: {
    width: 250,
    height: 166
  },
  titleBox: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '80%',
    height: '20%',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: 'black',
    margin: 10,
    shadowColor: '#dcdee2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1
  },
  info: {
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  hours: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  bottomButton: {
    width: '100%',
    height: 100,
    backgroundColor: '#c2ceb5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  }
};

export default TopicScreen;
