import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export default function SplashScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#21A4F1" }}>
      <View style={styles.header}>
        <View style={styles.circle}>
          <Animatable.Image
            animation="bounceIn"
            source={require("../assets/dating_app_icon.png")}
            style={styles.logo}
          />
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Stay connected with everyone !</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => props.navigation.navigate("Signin")}
        >
          <Text>Get Started</Text>
          <MaterialIcons name="navigate-next" color="#fff" size={20} />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const { height } = Dimensions.get("screen");

const height_logo = height * 0.28;

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
    position: "relative",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
    borderWidth: 5,
  },
  circle: {
    width: height_logo + 10,
    height: height_logo + 10,
    borderRadius: height_logo + 10 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
  },
  text: {
    fontWeight: "100",
  },
  signIn: {
    backgroundColor: "#21A4F1",
    width: 130,
    height: 40,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 100,
    marginRight: 30,
  },
});
