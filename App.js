import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import MainTabScreen from "./screens/MainTabScreen";
import CustomDrawer from "./screens/CustomDrawer";
import BookmarkScreen from "./screens/BookmarkScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SupportScreen from "./screens/SupportScreen";
import RootStackScreen from "./screens/RootStackScreen";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
    // <NavigationContainer>
    //   <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
    //     <Drawer.Screen name="Drawer" component={MainTabScreen} />
    //     <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
    //     <Drawer.Screen name="Support" component={SupportScreen} />
    //     <Drawer.Screen name="Settings" component={SettingsScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
