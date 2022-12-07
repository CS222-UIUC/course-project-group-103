import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import CalendarPage from "./screens/CalendarPage";
import BuildingList from "./screens/BuildingList";
import MapPage from "./screens/MapPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#E84A27'
        },
        headerTintColor: '#fff'
      }}>
        <Stack.Screen
          name='Sign up'
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

