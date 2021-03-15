import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DetailsScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details"
        onPress={() => props.navigation.push("Detail")}
      />
      <Button
        title="Go to home"
        onPress={() => props.navigation.navigate("Home")}
      />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
