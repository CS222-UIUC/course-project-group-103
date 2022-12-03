import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableHighlight, ScrollView, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { StackActions } from '@react-navigation/native';
import { useState } from 'react';

let dh = Dimensions.get('window').height;
let dw = Dimensions.get('window').width;

export default function LoginPage({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.containerLogIn}>
        <View style={styles.LogInSections}>
        <Text style={styles.LogInTopText}>
            Log In
        </Text>
        </View>
        
        <View style={styles.LogInSections}>
        <View style={styles.LogInInputAndInfo}>
            <View style={styles.LogInInfo}>
            <Text style={styles.LogInInputText}>
                Name:
            </Text>
            </View>
            <TextInput style={styles.LogInInputs}
              placeholder='e.g. John Doe'
              onChangeText={(val) => setName(val)}
            />

        </View>

        <View style={styles.LogInInputAndInfo}>
            <View style={styles.LogInInfo}>
            <Text style={styles.LogInInputText}>
                Email:
            </Text>
            </View>
            <TextInput style={styles.LogInInputs}
              placeholder='e.g. JohnDoe@email.com'
              onChangeText={(val) => setEmail(val)}
            />
        </View>

        <View style={styles.LogInInputAndInfo}>
            <View style={styles.LogInInfo}>
            <Text style={styles.LogInInputText}>
                Password:
            </Text>
            </View>
            <TextInput style={styles.LogInInputs}
              placeholder='Password'
              onChangeText={(val) => setPassword(val)}
            />
        </View>
        </View>

        <View style={styles.LogInSections}>
            <View style={styles.button}>
               <Button title="Log In"
                    onPress={() => navigation.navigate("Home")}
               />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogIn: {
    height: 9*dh/10,
    width: dw,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'block',
  },
  LogInSections: {
    height: 3*dh/10,
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
    height: dh/18,
    width: dw,
    paddingVertical: dh/25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogInInfo: {
    height: dh/18,
    width: dw/3,
    paddingVertical: dh/72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogInInputs: {
    height: dh/18,
    width: dw/2,
    padding: dh/72,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1,
  },
  LogInInputText: {
    fontSize: dh/39,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: dh/10,
    width: dw/3,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
