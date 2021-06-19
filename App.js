import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Routes from "./components/Routes"
import {Provider} from "react-redux";
import store from "./components/store";

export default function App() {
  return (
    <Provider  store={store}>
    <View style={styles.container}>
    <Routes/>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DE4839",
    width: Dimensions.get("window").width,
    height :Dimensions.get("window").heigh,
  },
});
