import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import Constants from 'expo-constants';

let dh = Dimensions.get('window').height;
let dw = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.containerLogIn}>
      <View style={styles.LogInSections}>
        <Text style={styles.LogInTopText}>
          Log In
        </Text>
      </View>
      <View style={styles.LogInSections}>
        <View style={styles.LogInInputAndInfo}>
          
        </View>
        <View style={styles.LogInInputAndInfo}>
          
        </View>
        <View style={styles.LogInInputAndInfo}>
          
        </View>
      </View>
      <View style={styles.LogInSections}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogIn: {
    height: dh,
    width: dw,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'block',
  },
  LogInSections: {
    height: dh/3,
    width: dw,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogInTopText: {
    textAlign: 'center',
    font: 'Avenir',
    fontSize: dh/15,
    fontWeight: 'bold',
    color: '#FDCA8C'
  },
  LogInInputAndInfo: {
    height: dh/12,
    width: dw,
    paddingVertical: dh/72,
    flexDirection: 'row',
  },
  LogInInfo: {
    height: dh/12,
    width: dw/3,
    paddingVertical: dh/72,
  },
  LogInInputs: {
    height: dh/12,
    width: dw/6,
    paddingVertical: dh/72,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'gray',
  },
});
