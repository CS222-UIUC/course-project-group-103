import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableHighlight, ScrollView, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

let dh = Dimensions.get('window').height;
let dw = Dimensions.get('window').width;

export default function MapPage({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.containerPage}>

        </View>
        <View style={styles.footer}>
            <View style={styles.footerButtons}>
                <Button title="Calendar"
                    onPress={() => navigation.navigate("Calendar")}
                />
            </View>
            <View style={styles.footerButtons}>
                <Button title="Building List"
                    onPress={() => navigation.navigate("Buildings")}
                />
            </View>
            <View style={styles.footerButtons}>
                <Button title="Home"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
            <View style={styles.footerButtonSelect}>
                <Button title="Map"
                    onPress={() => navigation.navigate("Map")}
                />
            </View>
            <View style={styles.footerButtons}>
                <Button title="User Page"
                    onPress={() => navigation.navigate("User")}
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