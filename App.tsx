// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { LogBox } from "react-native";
import DoctorsScreen from "./src/screens/DoctorsScreen";

LogBox.ignoreLogs(["is not a valid color"]);

export type AppStackParamsList = {
  Home: undefined;
  Doctors: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamsList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Doctors" component={DoctorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
