import { View, Button, StyleSheet, Linking } from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../components/context";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomDrawer(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.0-1/p200x200/157244995_2898606100352619_2273644667196326171_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BmFxA1gpQhEAX_uIYBy&_nc_ht=scontent-xsp1-3.xx&tp=6&oh=4f8d7eab3319e3082b848a3bf8b74510&oe=60742749",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15 }}>
                <Title style={styles.title}>Minh Hoang</Title>
                <Caption style={styles.caption}>@hoang.nvm</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  800
                </Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => {
                  return (
                    <MaterialCommunityIcons
                      name="home-outline"
                      color={color}
                      size={size}
                    />
                  );
                }}
                label="Home"
                onPress={() => props.navigation.navigate("Home")}
              />
              <DrawerItem
                icon={({ color, size }) => {
                  return (
                    <MaterialCommunityIcons
                      name="account-outline"
                      color={color}
                      size={size}
                    />
                  );
                }}
                label="Profile"
                onPress={() => props.navigation.navigate("Profile")}
              />
              <DrawerItem
                icon={({ color, size }) => {
                  return (
                    <MaterialCommunityIcons
                      name="bookmark-outline"
                      color={color}
                      size={size}
                    />
                  );
                }}
                label="Bookmarks"
                onPress={() => props.navigation.navigate("Bookmark")}
              />
              <DrawerItem
                icon={({ color, size }) => {
                  return (
                    <MaterialCommunityIcons
                      name="chat-outline"
                      color={color}
                      size={size}
                    />
                  );
                }}
                label="Settings"
                onPress={() => props.navigation.navigate("Settings")}
              />
              <DrawerItem
                icon={({ color, size }) => {
                  return (
                    <MaterialCommunityIcons
                      name="account-check-outline"
                      color={color}
                      size={size}
                    />
                  );
                }}
                label="Support"
                onPress={() => props.navigation.navigate("Support")}
              />
            </Drawer.Section>
            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}
              >
                <View style={styles.preference}>
                  <Text>Dark Mode</Text>
                  <View pointerEvents="none">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="exit-to-app"
                color={color}
                size={size}
              />
            );
          }}
          label="Sign out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
