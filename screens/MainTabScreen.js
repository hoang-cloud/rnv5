import { Text, View, Button, StyleSheet } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import NotificationScreen from "./NotificationScreen";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      tabBarOptions={{ backgroundColor: "#F8F8F8" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailsScreen}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profiles",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notify",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
