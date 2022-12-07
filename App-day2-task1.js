import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Box from "./Box";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.parent}>
        <Text style={styles.text}>Here are some boxes with color names</Text>
        <Box title={"Cyan: #2aa198"} bgColor={"#2aa198"}></Box>
        <Box title={"Blue: #268bd2"} bgColor={"#268bd2"}></Box>
        <Box title={"Magenta: #d33682"} bgColor={"#d33682"}></Box>
        <Box title={"Orange: #cb4b16"} bgColor={"#cb4b16"}></Box>
        <Box title={"Soha Ali"} bgColor={"black"}></Box>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
  parent: {
    paddingTop: 80,
    padding: 20,
  },
});
