import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import ListSelect from '../components/ListSelect';
import { ListItem, List, ListDescription, ListSection, ListImage } from '../components/common';


class TopicScreen extends React.Component {
  static navigationOptions = {
    headerRight: null,
    title: 'Geometry'
  };
    /*constructor(props) {
        super(props);
        this.state = { total: 0.00 };
    }*/

  render() {

    return (

      <View style={{ flex: 1 }}>
        <List>
          <ListSection headerText='Geometry Videos'>
            <ListItem onPress={() => this.props.navigation.navigate('Video')} image='https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2013/08/20204949/dispensary-faqs.jpg' />
            <ListItem onPress={() => this.props.navigation.navigate('Video', { rating: ' 4.9 ', title: 'MedMen', deliveryTime: '|  15 - 20 mins ', product: 'Gelato' })} image='https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2013/08/20204949/dispensary-faqs.jpg' />
            <ListItem onPress={() => this.props.navigation.navigate('Video', { rating: ' 4.9 ', title: 'MedMen', deliveryTime: '|  15 - 20 mins ', product: 'Gelato' })} image='https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2013/08/20204949/dispensary-faqs.jpg' />
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
