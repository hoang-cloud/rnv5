import { StatusBar } from "expo-status-bar";
import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useReducer,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
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
import { AuthContext } from "./components/context";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App(props) {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return { ...state, isLoading: false, userToken: action.token };
      case "LOGIN":
        return {
          ...state,
          isLoading: false,
          token: action.token,
          userName: action.id,
        };
      case "LOGOUT":
        return { ...state, isLoading: false, token: null };
      case "SIGNUP":
        return {
          ...state,
          isLoading: false,
          token: action.token,
          userName: action.id,
        };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const authContext = React.useMemo(
    () => ({
      signIn: (userName, password) => {
        // setUserToken("kkkk");
        // setIsLoading(false);
        let username;
        let token;
        // if (userName === "user" && password === "password") {
        // }
        dispatch({ type: "LOGIN", id: userName, token: "xxx" });
      },
      signOut: () => {
        // setUserToken(null);
        // setIsLoading(false);
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("kkkk");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "RETRIEVE_TOKEN", token: "xxx" });
    }, 1000);
  }, []);

  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? (
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
          >
            <Drawer.Screen name="Drawer" component={MainTabScreen} />
            <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
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
