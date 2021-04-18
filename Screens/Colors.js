import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Clipboard from "expo-clipboard";

export default function Color({ colorData, copyToClipBoard, navigation }) {
  return (
    <ScrollView>
      <Button
        title="Go Back To Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <View style={styles.colorContainer}>
        {colorData &&
          colorData
            .sort(() => 0.5 - Math.random())
            .splice(0, 20)
            .map((color) => {
              return (
                <TouchableOpacity
                  key={color.hex}
                  style={{
                    backgroundColor: color.hex,
                    justifyContent: "center",
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "center",
                    height: 150,
                    margin: 20,
                    width: "30%",
                  }}
                  onPress={() => copyToClipBoard(color.hex)}
                >
                  <View
                    style={{
                      justifyContent: "flex-end",
                      alignSelf: "center",
                      height: "100%",
                    }}
                  >
                    <Text style={styles.colorText}>{color.name}</Text>
                    <Text style={styles.colorText}>{color.hex}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  colorContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  colorText: {
    color: "white",
    paddingBottom: 30,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
