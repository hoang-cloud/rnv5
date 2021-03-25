import React, { Component, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

const DetailsScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      {props.userState.map((i) => (
        <View>
          <Text>{i.phone}</Text>
        </View>
      ))}
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

const mapStateProps = (state) => {
  return { userState: state.userState };
};

export default connect(mapStateProps, null)(DetailsScreen);
