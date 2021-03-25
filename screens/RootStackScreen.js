import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import SplashScreen from "./SplashScreen";
const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Signin" component={SignInScreen} />
      <RootStack.Screen name="Signup" component={SignUpScreen} />
    </RootStack.Navigator>
  );
}
