import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Dimensions, ImageBackground, TouchableHighlight, ScrollView, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { StackActions } from '@react-navigation/native';

let dh = Dimensions.get('window').height;
let dw = Dimensions.get('window').width;

export default function BuildingList({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.containerPage}>
        
        <Image // grainger
          style = {{width: 150, height: 150}}
          source={{uri: 'https://www.library.illinois.edu/wp-content/uploads/2017/12/grainger23_small.jpg'}} 
        />
        <Image //cif
          style = {{width: 150, height: 150}}
          source={{uri: 'https://www.som.com/wp-content/uploads/2018/05/UIUC_SOM_DaveBurk_010_large-1647621340-scaled.jpg'}} 
        />
        <Image //aces
          style = {{width: 150, height: 150}}
          source={{uri: 'https://www.burasphotography.com/img/s/v-10/p1516178263-4.jpg'}}
        />
        <Image //main library
          style = {{width: 150, height: 150}}
          source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AMain_Library-University_of_Illinois_at_Urbana-Champaign_11.jpg&psig=AOvVaw3zam2id63XEVbKZ9Gk5NG5&ust=1667707641948000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDb_qCVlvsCFQAAAAAdAAAAABAD'}}
        />

        </View>
        <View style={styles.footer}>
            <View style={styles.footerButtons}>
                <Button title="Calendar"
                    onPress={() => navigation.dispatch(StackActions.replace("Calendar"))}
                />
            </View>
            <View style={styles.footerButtonSelect}>
                <Button title="Building List"
                    onPress={() => navigation.dispatch(StackActions.replace("Buildings"))}
                />
            </View>
            <View style={styles.footerButtons}>
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