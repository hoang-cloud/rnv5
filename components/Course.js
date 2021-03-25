import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
export default function Course(props) {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Card}>
        <ImageBackground source={props.image} style={styles.Background}>
          <View style={styles.LogoWrapper}>
            <Image source={props.bigLogo} style={styles.BigLogo} />
          </View>
          <View style={styles.ContentWrapper}>
            <Text style={styles.SectionTotal}>{props.totalSection}</Text>
            <Text style={styles.Title}>{props.title}</Text>
          </View>
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
    marginBottom: 20,
  },
  Card: {
    width: 335,
    height: 335,
    borderRadius: 14,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  Background: {
    height: 260,
    width: 335,
    paddingTop: 20,
  },
  Title: {
    color: "#fff",
    fontSize: 24,
    width: 167,
    height: 58,
    marginTop: 10,
  },
  CardContent: {
    width: 335,
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  Logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  TextWrapper: {
    marginLeft: 10,
  },
  SectionName: {
    fontWeight: "100",
  },
  SectionNumber: {
    color: "#B8BECE",
  },
  SectionTotal: {
    color: "#B8BECE",
    textTransform: "uppercase",
    fontSize: 20,
  },
  ContentWrapper: {
    flex: 3,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingLeft: 20,
  },
  LogoWrapper: {
    alignItems: "center",
  },
  BigLogo: {
    width: 48,
    height: 48,
  },
});
