import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
const Home = ({ setcolorName, getColorList, navigation }) => {
  return (
    <View style={styles.inputSection}>
      <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
        <Text style={{ fontSize: 22, textAlign: "center" }}>
          Enter A Word:{" "}
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(val) => setcolorName(val)}
        />
      </View>
      <Button
        style={{ width: "100%", padding: 30 }}
        title="Get Colors"
        onPress={() => getColorList(navigation)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputSection: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 30,
  },
  textInput: {
    borderBottomWidth: 1,
    width: 150,
    padding: 10,
    margin: 10,
  },
});

export default Home;
