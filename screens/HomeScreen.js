import React, { Component, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import getData from "../api/getData";
import { increment, decrement, fetchUser } from "../redux/actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Avatar from "../components/Avatar";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Course from "../components/Course";
import { Ionicons } from "@expo/vector-icons";
const HomeScreen = (props) => {
  useEffect(() => {
    getData().then((res) => props.fetchUser(res));
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.NavBar}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Avatar />
            </TouchableOpacity>
            <View style={styles.TextWrapper}>
              <Text style={styles.Welcome}>Welcome back,</Text>
              <Text style={styles.txtName}>Hoang</Text>
            </View>
            <Ionicons
              name="notifications"
              size={35}
              color="#4775F2"
              style={styles.Notify}
            />
          </View>
          <ScrollView
            style={styles.LogoSection}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            <Logo logo={require("../assets/logo-figma.png")} text="Figma" />
            <Logo logo={require("../assets/logo-vue.png")} text="Vue" />
            <Logo logo={require("../assets/logo-react.png")} text="React" />
            <Logo logo={require("../assets/logo-swift.png")} text="Swift" />
          </ScrollView>
          <Text style={styles.txtContinue}>Continue Learning</Text>
          <ScrollView
            style={styles.CardSection}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Card
              image={require("../assets/background9.jpg")}
              logo={require("../assets/logo-vue.png")}
              title="SCSS Introduction"
              sectionName="Vue JS"
              sectionNumber="1 of 12 sections"
            />
            <Card
              image={require("../assets/background1.jpg")}
              logo={require("../assets/logo-react.png")}
              title="Redux Introduction"
              sectionName="React Native"
              sectionNumber="1 of 12 sections"
            />
            <Card
              image={require("../assets/background8.jpg")}
              logo={require("../assets/logo-swift.png")}
              title="SwiftUI Introduction"
              sectionName="Swift UI"
              sectionNumber="1 of 12 sections"
            />
          </ScrollView>
          <Text style={styles.txtContinue}>Popular Courses</Text>
          <ScrollView style={styles.CourseSection}>
            <Course
              image={require("../assets/background6.jpg")}
              logo={require("../assets/IMG_4529.jpeg")}
              title="SwiftUI Introduction"
              sectionName="Swift UI Nâng Cao"
              sectionNumber="Hướng dẫn bởi Anh Thư"
              totalSection="10 Sections"
              bigLogo={require("../assets/logo-swift.png")}
            />
            <Course
              image={require("../assets/background16.jpg")}
              logo={require("../assets/IMG_4532.jpg")}
              title="React-Native Introduction"
              sectionName="React Native Nâng Cao"
              sectionNumber="Hướng dẫn bởi Anh Thư"
              totalSection="12 Sections"
              bigLogo={require("../assets/logo-react.png")}
            />
            <Course
              image={require("../assets/background12.jpg")}
              logo={require("../assets/IMG_4530.jpg")}
              title="Vue Introduction"
              sectionName="Vue Nâng Cao"
              sectionNumber="Hướng dẫn bởi Anh Thư"
              totalSection="15 Sections"
              bigLogo={require("../assets/logo-vue.png")}
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f5",
    alignItems: "center",
    justifyContent: "center",
  },
  NavBar: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    position: "relative",
  },
  TextWrapper: {
    marginLeft: 10,
  },
  Welcome: {
    fontSize: 16,
    fontWeight: "100",
    color: "#B8BECE",
  },
  txtName: {
    fontSize: 25,
    fontWeight: "400",
  },
  Notify: {
    position: "absolute",
    top: 25,
    right: 25,
  },
  LogoSection: {
    height: 100,
    paddingTop: 20,
    paddingLeft: 20,
  },
  txtContinue: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#B8BECE",
    paddingLeft: 20,
  },
  CardSection: {
    height: 320,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  CourseSection: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({ increment, decrement, fetchUser }, dispatch);
const mapStateProps = (state) => {
  return { userState: state.userState, countState: state.countState };
};

export default connect(mapStateProps, mapDispatchProps)(HomeScreen);
