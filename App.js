import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import CalendarPage from "./screens/CalendarPage";
import BuildingList from "./screens/BuildingList";
import MapPage from "./screens/MapPage";
import UserPage from "./screens/UserPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

// import * as React from 'react';
// import * as RN from 'react-native';

// class MyCalendar extends React.Component {
//   months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   _onPress = (item) => {
//     this.setState(() => {
//       if (!item.match && item != -1) {
//         this.state.activateDate.setDate(item);
//         return this.state;
//       }
//     });   
//   };
//   changeMonth = (n) => {
//     this.setState(() => {
//       this.state.activateDate.setMonth(
//         this.state.activateDate.getMonth() + n
//       )
//       return this.state;
//     });
//   }
//   weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   state = {
//     activateDate: new Date()
//   }
//   generateMatrix() {
//     var matrix = [];
//     matrix[0] = this.weekDays;
//     var year = this.state.activateDate.getFullYear();
//     var month = this.state.activateDate.getMonth();
//     var firstDay = new Date(year, month, 1).getDay();
//     var maxDays = this.nDays[month];
//     if (month == 1) {
//       if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         maxDays += 1;
//       }
//     }
//     var counter = 1;
//     for (var row = 1; row < 7; row ++) {
//       matrix[row] = [];
//       for (var col = 0; col < 7; col++) {
//         matrix[row][col] = -1;
//         if (row == 1 && col >= firstDay) {
//           matrix[row][col] = counter++;
//         } else if (row > 1 && counter <= maxDays) {
//           matrix[row][col] = counter++
//         }
//       }
//     }
//     return matrix;
//   }
//    render() {
//      var matrix = this.generateMatrix();
//      var rows = [];
//      rows = matrix.map((row, rowIndex) => {
//        var rowItems = row.map((item, colIndex) => {
//          return (
//            <RN.Text
//               style={{
//                 flex: 1,
//                 height: 18,
//                 textAlign: 'center',
//                 backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
//                 color: colIndex == 0 ? '#a00' : '#000',
//                 fontWeight: item == this.state.activateDate.getDate()
//                                   ? 'bold': ''
//               }}
//               onPress={() => this._onPress(item)}>
//               {item != -1 ? item : ''}
//             </RN.Text>
//          );
//        });
//        return (
//          <RN.View
//             style={{
//               flex: 1,
//               flexDirection: 'row',
//               padding: 15,
//               justifyContent: 'space-around',
//               alignItems: 'center'
//             }}>
//               {rowItem}
//             </RN.View>
//        );
//      });
//      return(
//        <RN.View>
//          <RN.Text style={{
//            fontWeight: 'bold',
//            fontSize: 18,
//            textAlign: 'center'
//          }}>
//            {this.months[this.state.activateDate.getMonth()]} &nbsp;
//            {this.state.activateDate.getFullYear()}
//          </RN.Text>
//          { rows }

//          <RN.Button title="Previous"
//          onPress={() => this.changeMonth(-1)}/>

//          <RN.Button title="Next"
//          onPress={() => this.changeMonth(+1)}/>
//        </RN.View>
//      );
//    }
// }
// export default class App extends React.Component {
//   render() {
//     return <MyCalendar/>;
//   }
// }
// export default App;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginPage}
        />
        <Stack.Screen
          name='Home'
          component={HomePage}
        />
        <Stack.Screen
          name='Calendar'
          component={CalendarPage}
        />
        <Stack.Screen
          name='Map'
          component={MapPage}
        />
        <Stack.Screen
          name='Buildings'
          component={BuildingList}
        />
        <Stack.Screen
          name='User'
          component={UserPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

