import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableHighlight, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
import { StackActions } from '@react-navigation/native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';



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
        <View styles={styles.containerPage}>
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
        </View>

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


          {/* <Agenda
              items={items}
              loadItemsForMonth={loadItems}
              selected={'2022-07-07'}
              refreshControl={null}
              showClosingKnob={true}
              refreshing={false}
              renderItem={renderItem}
          />
          <StatusBar /> */}
      </View>
    
  );
  /*
  return (
    <View style={styles.container}>
      
      
       <ScrollView
          horizontal={true}
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
      */
      /*
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
*/
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
    //width: 7 * dw,
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
  }
});


//import App from '../App';


/*
import * as React from 'react';
import * as RN from 'react-native';

class MyCalendar extends React.Component {
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  _onPress = (item) => {
    this.setState(() => {
      if (!item.match && item != -1) {
        this.state.activateDate.setDate(item);
        return this.state;
      }
    });   
  };
  changeMonth = (n) => {
    this.setState(() => {
      this.state.activateDate.setMonth(
        this.state.activateDate.getMonth() + n
      )
      return this.state;
    });
  }
  weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  state = {
    activateDate: new Date()
  }
  generateMatrix() {
    var matrix = [];
    matrix[0] = this.weekDays;
    var year = this.state.activateDate.getFullYear();
    var month = this.state.activateDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay();
    var maxDays = this.nDays[month];
    if (month == 1) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }
    var counter = 1;
    for (var row = 1; row < 7; row ++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          matrix[row][col] = counter++
        }
      }
    }
    return matrix;
  }
   render() {
     var matrix = this.generateMatrix();
     var rows = [];
     rows = matrix.map((row, rowIndex) => {
       var rowItems = row.map((item, colIndex) => {
         return (
           <RN.Text
              style={{
                flex: 1,
                height: 18,
                textAlign: 'center',
                backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
                color: colIndex == 0 ? '#a00' : '#000',
                fontWeight: item == this.state.activateDate.getDate()
                                  ? 'bold': ''
              }}
              onPress={() => this._onPress(item)}>
              {item != -1 ? item : ''}
            </RN.Text>
         );
       });
       return (
         <RN.View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
              {rowItem}
            </RN.View>
       );
     });
     return(
       <RN.View>
         <RN.Text style={{
           fontWeight: 'bold',
           fontSize: 18,
           textAlign: 'center'
         }}>
           {this.months[this.state.activateDate.getMonth()]} &nbsp;
           {this.state.activateDate.getFullYear()}
         </RN.Text>
         { rows }

         <RN.Button title="Previous"
         onPress={() => this.changeMonth(-1)}/>

         <RN.Button title="Next"
         onPress={() => this.changeMonth(+1)}/>
       </RN.View>
     );
   }
}
*/
// // export default class App extends React.Component {
// //   render() {
// //     return <MyCalendar/>;
// //   }
// // }
// //export default App;

// import React from 'react';
// //import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card } from 'react-native-paper';