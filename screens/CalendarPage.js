import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableHighlight, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';




const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}


let dh = Dimensions.get('window').height;
let dw = Dimensions.get('window').width;

export default function CalendarPage({ navigation }) {
  const [items, setItems] = React.useState({});

  const loadItems = (day) => {

      setTimeout(() => {
          for (let i = -15; i < 85; i++) {
              const time = day.timestamp + i * 24 * 60 * 60 * 1000;
              const strTime = timeToString(time);

              if (!items[strTime]) {
                  items[strTime] = [];

                  const numItems = Math.floor(Math.random() * 3 + 1);
                  for (let j = 0; j < numItems; j++) {
                      items[strTime].push({
                          name: 'Item for ' + strTime + ' #' + j,
                          height: Math.max(10, Math.floor(Math.random() * 150)),
                          day: strTime
                      });
                  }
              }
          }
          const newItems = {};
          Object.keys(items).forEach(key => {
              newItems[key] = items[key];
          });
          setItems(newItems);
      }, 1000);
  }

  const renderItem = (item) => {
      return (
          <TouchableOpacity style={styles.item}>
              <Card>
                  <Card.Content>
                      <View>
                          <Text>{item.name}</Text>
                      </View>
                  </Card.Content>
              </Card>
          </TouchableOpacity>
      );
  }

  return (
      <View style={styles.container}>
        {/* <View styles={styles.containerPage}> */}
              <Agenda
              items={items}
              loadItemsForMonth={loadItems}
              selected={'2022-07-07'}
              refreshControl={null}
              showClosingKnob={true}
              refreshing={false}
              renderItem={renderItem}
            />
          <StatusBar />
        {/* </View> */}

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
    // backgroundColor: '#fff',
  },
  containerPage: {
    height: 4*dh/5,
    width: dw,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  }
});