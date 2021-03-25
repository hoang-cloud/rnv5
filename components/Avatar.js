import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
export default function Avatar(props) {
  return (
    <View>
      <Image
        source={{
          uri:
            "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.0-1/p200x200/157244995_2898606100352619_2273644667196326171_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BmFxA1gpQhEAX_uIYBy&_nc_ht=scontent-xsp1-3.xx&tp=6&oh=4f8d7eab3319e3082b848a3bf8b74510&oe=60742749",
        }}
        style={styles.Img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  Img: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});
