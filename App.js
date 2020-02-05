import React from 'react';
import {TouchableOpacity} from 'react-native'
import { View, Text,Button,StyleSheet,Image,ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Svg, { Rect } from "react-native-svg";

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity>
        <Button
        title="go to about"
        onPress={()=>this.props.navigation.navigate('About')}
        />
         </TouchableOpacity>
         <Image source={require('./android/Image/yyy.jpg')} />
      </View>
     
    );
  }
}
class AboutScreen extends React.Component {
  
    static navigationOptions = {
      title: 'About',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  
  render() {
    const { navigate } = this.props.navigation;
    return (     
      <View style={styles.image}>     
      <TouchableOpacity  style={styles.button} 
       onPress={() => navigate('Third')}
      >
         <View style={styles.image1}>       
      <Image style={styles.imagestyle}
           source={require('./android/Image/eeee.jpg')}         
          />
          <Text>First Floor</Text>
          </View>        
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button} 
       onPress={() => navigate('Fourth')}
      >
      <View style={styles.image2}>
      <Image style={styles.imagestyle}
           source={require('./android/Image/ffff.jpg')}          
          />
          <Text> Floor</Text>
          </View>       
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button}
       onPress={() => navigate('Third')}
      >
      <View style={styles.image3}>        
      <Image style={styles.imagestyle}
           source={require('./android/Image/yyy.jpg')}        
          />
          <Text>Third Floor</Text>
          </View>
      </TouchableOpacity>    
      </View>
  ); 
}
}

       
  class ThirdScreen extends React.Component {
    render() {
      return (
        <ScrollView>
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Third Screen</Text>
          <Button
        title="go to fourth"
        onPress={()=>this.props.navigation.navigate('Fourth')}
        />
        <Text>first photo</Text>
       <Image source={require('./android/Image/cccc.jpg')} />
       <Text>second photo</Text>
       <Image source={require('./android/Image/ddddd.jpg')} />
       <Text>Third photo</Text>
       <Image source={require('./android/Image/eeee.jpg')} />
       <Text>first photo</Text>
       <Image source={require('./android/Image/ffff.jpg')} />
       <Text>first photo</Text>
       <Image source={require('./android/Image/zzzz.png')} />
        </View>
        </ScrollView>
        );
      }
    }
    class FourthScreen extends React.Component {
      render() {
        return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Fourth Screen</Text>
            <Button
        title="go to home"
        onPress={()=>this.props.navigation.goBack()}
        />
          </View>
          );
        }
      }
const AppNavigator = createStackNavigator({
  Museum: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Third: {
    screen: ThirdScreen,
  },
  Fourth: {
    screen: FourthScreen,
  },
});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
// const styles = StyleSheet.create({
//   touch: {
//     flex: 9,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
const styles = StyleSheet.create({
  image : {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'space-around',
    
  
  

    

  },
  image1: {
   
    alignItems: 'flex-start',
    
    marginTop:15,
    // marginRight:27
  
    
  },
  image2: {
    
    alignItems: 'flex-start',
    // margin:2,
    // marginRight:1,
    
    marginTop:15,

    
    
  },
  image3: {
    
    alignItems: 'flex-end',
    
    marginTop:15,
    // margin:5,
    // marginRight:78
   

  
    
    
  },
  
  // button: {
  //   alignItems: 'center',
  //   backgroundColor: '#DDDDDD',
  //   padding: 10,
  // },
  imagestyle: {
    height:100,
    width:100
  },
 
  
});