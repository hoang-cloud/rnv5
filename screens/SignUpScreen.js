import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useState, useContext } from "react";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../components/context";
export default function SignInScreen(props) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const { signUp } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "600", fontSize: 30, color: "#fff" }}>
          Welcome! Sign Up
        </Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View
          style={{ justifyContent: "center", paddingTop: 50, paddingLeft: 50 }}
        >
          <Text>Username</Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-people" size={20} />
            <TextInput
              placeholder="Enter your username"
              style={{ marginLeft: 10 }}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
        </View>
        <View
          style={{ justifyContent: "center", paddingTop: 30, paddingLeft: 50 }}
        >
          <Text>Password</Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-lock-closed" size={20} />
            <TextInput
              placeholder="Enter your passwords"
              style={{ paddingLeft: 10 }}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => setData({ ...data, password: val })}
            />
            <TouchableOpacity
              onPress={() =>
                setData({ ...data, secureTextEntry: !data.secureTextEntry })
              }
            >
              <Feather name="eye-off" color="grey" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ justifyContent: "center", paddingTop: 30, paddingLeft: 50 }}
        >
          <Text>Confirm Password</Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-lock-closed" size={20} />
            <TextInput
              placeholder="Confirm your passwords"
              style={{ paddingLeft: 10 }}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => setData({ ...data, confirmPassword: val })}
            />
            <TouchableOpacity
              onPress={() =>
                setData({ ...data, secureTextEntry: !data.secureTextEntry })
              }
            >
              <Feather name="eye-off" color="grey" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#21A4F1",
              width: 150,
              height: 30,
              borderRadius: 14,
            }}
          >
            <Text style={{ color: "#fff" }}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
          onPress={() => {
            signUp(data.email, data.password, data.confirmPassword);
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#21A4F1",
              width: 150,
              height: 30,
              borderRadius: 14,
            }}
          >
            <Text>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21A4F1",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
