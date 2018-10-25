import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


class VideoScreen extends React.Component {
  static navigationOptions = {
    title: 'Video',
  };
  render() {


    return (

      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <View style={styles.titleBox} >
          <Text style={styles.titleText}>Curr Video</Text>
          <View style={styles.info}>
            <Image style={{ height: 15, width: 15 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOshcJkmYWYYilyAHPayOP8kZUwpjBpYkv2lHFjywYiYgXDK_j' }} />
            <Text>
              Title
            </Text>
            <Text>
              Length
            </Text>
          </View>
        </View>
        <Text style={styles.hours}>
          Data
        </Text>

        <Image style={{ height: 80, width: 100 }} source={{ uri: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcuAHe_mqxAXeacR3joRmumdPk.nmk_O7m8q7tEDRSKEACnQV6zdX7Kr56ktO82agVfQxdpIq0xYlW7cq8EFdN7Gswj5xPgcKban1SyWQ0kbaFbw80jkrJKIimcPIosqjfB_lSwsidzqzyMb7XiwKCy2E4cOspLg8HbbJL7EqDa9E-&h=1080&w=1920&format=jpg' }} />

        <View style={styles.itemStyle}>
          <Text>Info</Text>
          <Text>Info</Text>
          <Text>Info</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Info</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Info</Text>
        </View>

        <View style={styles.itemStyle}>

          <Text>Info</Text>
          <Text>Info</Text>
          <Text>Info</Text>
        </View>
        <View style={styles.itemStyle}>
          <Text>Info</Text>
        </View>
        <TouchableOpacity style={styles.bottomButton} >
          <Text style={styles.bottomButtonText}>
            Download
          </Text>
        </TouchableOpacity>
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
  itemStyle: {
    width: '100%',
    height: '10%',
    borderBottomWidth: 1,
    borderColor: '#dcdee2',
    borderRadius: 0,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleBox: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '80%',
    height: '10%',
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
export default VideoScreen;
