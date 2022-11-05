import LoginPage from "./screens/LoginPage";
import SignInPage from "./screens/SignInPage";
import HomePage from "./screens/HomePage";
import CalendarPage from "./screens/CalendarPage";
import BuildingList from "./screens/BuildingList";
import MapPage from "./screens/MapPage";
import UserPage from "./screens/UserPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
          name='Sign In'
          component={SignInPage}
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

