import { View, Text, StyleSheet } from "react-native";
import React from "react";

import styles from "./style";

// props = {bgColor,title}
const Box = ({ bgColor, title }) => {
  return (
    <View
      style={[
        styles.boxStyle,
        {
          backgroundColor: bgColor,
        },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Box;
