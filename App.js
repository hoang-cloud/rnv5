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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware, bindActionCreators } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import { connect } from "react-redux";
import { retrieveToken } from "./redux/actions/index";
import { LOGOUT, RETRIEVE_TOKEN } from "./redux/constants/index";
const store = createStore(rootReducer, applyMiddleware(thunk));

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App(props) {
  const [data, setData] = React.useState({
    isLoading: true,
    token: null,
  });
  useEffect(() => {
    store.dispatch({ type: RETRIEVE_TOKEN, token:'xxx' });
    const { loginState } = store.getState();
    setData({
      ...data,
      isLoading: loginState.isLoading,
      token: loginState.token,
    });
  }, []);

  if (data.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        {data.token ? (
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
    </Provider>
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
