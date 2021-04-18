import axios from "axios";
import { StatusBar } from "expo-status-bar";
import Stack from "./routes/HomeStack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
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
import Home from "./Screens/Home";
import Color from "./Screens/Colors";

export default function App() {
  const [colorName, setcolorName] = useState(null);
  const [colorData, setcolorData] = useState(null);
  const getColorList = (navigation) => {
    const url = `https://api.color.pizza/v1/names/${colorName}`;
    axios.get(url).then((res) => {
      setcolorData(res.data.colors);
    });
    navigation.navigate("Result");
  };
  const copyToClipBoard = (hex) => {
    console.log(hex);
    Clipboard.setString(hex);
  };
  if (colorData) console.log(colorData);
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              options={{
                title: "HOME",
                headerStyle: {
                  backgroundColor: "crimson",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  textAlign: "center",
                },
              }}
            >
              {(props) => (
                <Home
                  {...props}
                  getColorList={getColorList}
                  setcolorName={setcolorName}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Result"
              options={{
                title: "FETCHED COLOR LIST",
                headerStyle: {
                  backgroundColor: "crimson",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  textAlign: "center",
                },
              }}
            >
              {(props) => (
                <Color
                  {...props}
                  colorData={colorData}
                  copyToClipBoard={copyToClipBoard}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>

          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abf",
  },
  textInput: {
    borderWidth: 1,
    borderBottomColor: "lime",
    width: 150,
    padding: 10,
    margin: 10,
  },
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
