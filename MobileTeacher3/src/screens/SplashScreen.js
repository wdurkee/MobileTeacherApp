import React from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image, Button } from 'react-native';
//import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
//import { Card, CardSection, Button } from '../components/common';

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (

        <View style={styles.viewStyle} >


            <Text style={styles.textStyle}>
            Welcome to Mobile Teacher
            </Text>
            <Text style={styles.textStyleSmall}>
            Please make sure you have the youtube go app already downloaded
            </Text>
            <View style={{ height: '30%', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={styles.manImageStyle} source={require('../images/Logo.png')} />
            </View>
            <Button onPress={() => this.props.navigation.navigate('Categories')} title="Next" />


          </View>

    );
  }
}


const styles = {
  viewStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: '#307221',
    flex: 1,
    //height: '100%',
    //width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  gradientStyle: {
    flex: 1,
    //height: '100%',
    //width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
  },
  textStyle: {
    fontStyle: 'italic',
    paddingTop: 150,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aee2c9',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  manImageStyle: {
    resizeMode: 'contain',
    height: 350,
    width: 175,
    marginTop: 40,

  },
  textStyleSmall: {
    fontStyle: 'italic',
    paddingTop: 150,
    paddingLeft: 20,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aee2c9',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  arrows: {
    fontSize: 40,
    marginLeft: '60%',
    marginTop: 25,
    color: '#008445',
    backgroundColor: 'rgba(0,0,0,0)'
  }
};

export default SplashScreen;
