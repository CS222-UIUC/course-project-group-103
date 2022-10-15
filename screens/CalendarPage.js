import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableHighlight, ScrollView, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { StackActions } from '@react-navigation/native';

let dh = Dimensions.get('window').height;
let dw = Dimensions.get('window').width;

export default function CalendarPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
          decelerationRate={0}
          snapToAlignment={'center'}
          >
        <View style={styles.containerPage}>
          
          <View style={styles.calendarBox}>
            <Text style={styles.text}>
              Sunday:),
            </Text>
          </View>

          <View style={styles.calendarBox}>
          <Text style={styles.text}>
              Monday:),
            </Text>
          </View>

          <View style={styles.calendarBox}>
          <Text style={styles.text}>
              Tuesday:),
            </Text>
          </View>

          <View style={styles.calendarBox}>
          <Text style={styles.text}>
              Wednesday:),
            </Text>
          </View>

          <View style={styles.calendarBox}>
          <Text style={styles.text}>
              Thursday:),
            </Text>
          </View>

          <View style={styles.calendarBox}>
          <Text style={styles.text}>
              Friday:),
            </Text>
          </View>

          <View style={styles.calendarBox}>
          <Text style={styles.text}>
              Saturday:),
            </Text>
          </View>

        </View>
        </ScrollView>
        <View style={styles.footer}>
            <View style={styles.footerButtonSelect}>
                <Button title="Calendar"
                    onPress={() => navigation.dispatch(StackActions.replace("Calendar"))}
                />
            </View>
            <View style={styles.footerButtons}>
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
    //width: dw,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  calendarBox: {
    height: 4*dh/5,
    width: 3*dw/5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
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