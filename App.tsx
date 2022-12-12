// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { LogBox } from "react-native";
import DoctorsScreen from "./src/screens/DoctorsScreen";
import { DoctorCardType } from "./src/utils/generator";
import DoctorDetailScreen from "./src/screens/DoctorDetailScreen";
import NewAppointment from "./src/screens/NewAppointment";

LogBox.ignoreLogs(["is not a valid color"]);

export type AppStackParamsList = {
  Home: undefined;
  Doctors: undefined;
  DoctorDetail: {
    doctor: DoctorCardType;
  };
  NewAppointment: {
    doctor: DoctorCardType;
  };
};

const Stack = createNativeStackNavigator<AppStackParamsList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="NewAppointment"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Doctors" component={DoctorsScreen} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetailScreen} />
        <Stack.Screen name="NewAppointment" component={NewAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
