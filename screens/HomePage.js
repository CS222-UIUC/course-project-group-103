import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableHighlight, ScrollView, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { StackActions } from '@react-navigation/native';
import {useState} from 'react';

let dh = Dimensions.get('window').height;
let dw = Dimensions.get('window').width;

export default function HomePage({ navigation }) {


  return (
    <View style={styles.container}>
        <View style={styles.containerPage}>
            <Image // uiuc
              style = {{width: 150, height: 150}}
              source={{uri: 'https://chemistry.illinois.edu/sites/default/files/inline-images/uiuc%20campus_0.png'}} 
            />
            <Text style={styles.title}>
            Hello and welcome to the Home Page! Use the buttons to navigate to your desired location
            </Text>
            <Text style={styles.text}>
            Calendar Page: import your schedule here!
            </Text>
            <Text style={styles.text}>
            Building List: see a list of common study spaces here!
            </Text>
            <Text style={styles.text}>
            Map: see nearby study spaces here!
            </Text>
            <Text style={styles.text}>
            UserPage: see the closest study space to you here!
            </Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.footerButtons}>
                <Button title="Calendar"
                    onPress={() => navigation.dispatch(StackActions.replace("Calendar"))}
                />
            </View>
            <View style={styles.footerButtons}>
                <Button title="Building List"
                    onPress={() => navigation.dispatch(StackActions.replace("Buildings"))}
                />
            </View>
            <View style={styles.footerButtonSelect}>
                <Button title="Home"
                    onPress={() => navigation.dispatch(StackActions.replace("Home"))}
                />
            </View>
            <View style={styles.footerButtons}>
                <Button title="Map"
                    onPress={() => navigation.dispatch(StackActions.replace("Map"))}
                />
            </View>
            <View style={styles.footerButtons}>
                <Button title="User Page"
                    onPress={() => navigation.dispatch(StackActions.replace("User"))}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPage: {
    height: 4*dh/5,
    width: dw,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: dh/10,
    width: dw,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerButtons: {
    height: dh/10,
    width: dw/5,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cad0db',
  },
  footerButtonSelect: {
    height: dh/10,
    width: dw/5,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9198a3',
  },
  text: {
    fontSize: dh/30,
  }
});