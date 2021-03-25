import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
export default function Logo(props) {
  return (
    <View>
      <View style={styles.Logo}>
        <Image source={props.logo} style={styles.Image} />
        <Text style={styles.Text}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  Logo: {
    width: 148,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "#fff",
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Image: {
    width: 36,
    height: 36,
    marginRight: 5,
  },
  Text: {
    fontWeight: "300",
    fontSize: 24,
    marginLeft: 5,
  },
});
