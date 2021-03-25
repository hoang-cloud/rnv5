import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
export default function Card(props) {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Card}>
        <ImageBackground source={props.image} style={styles.Background}>
          <Text style={styles.Title}>{props.title}</Text>
        </ImageBackground>
        <View style={styles.CardContent}>
          <Image source={props.logo} style={styles.Logo} />
          <View style={styles.TextWrapper}>
            <Text style={styles.SectionName}>{props.sectionName}</Text>
            <Text style={styles.SectionNumber}>{props.sectionNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 20,
  },
  Card: {
    width: 315,
    height: 280,
    borderRadius: 14,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  Background: {
    height: 200,
    width: 315,
    paddingTop: 20,
    paddingLeft: 20,
  },
  Title: {
    color: "#fff",
    fontSize: 24,
    width: 167,
    height: 58,
  },
  CardContent: {
    width: 315,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  Logo: {
    width: 48,
    height: 48,
  },
  TextWrapper: {
    marginLeft: 10,
  },
  SectionName: {
    fontSize: 24,
    fontWeight: "100",
  },
  SectionNumber: {
    textTransform: "uppercase",
    color: "#B8BECE",
  },
});
