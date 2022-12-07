import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Box from "./Box";


const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

export default function App() {
  return (
    <SafeAreaView>
      <FlatList
        data={COLORS}
        renderItem={({ item: { colorName, hexCode } }) => <Box title={colorName} bgColor={hexCode} />}
        keyExtractor={({ hexCode }) => hexCode}
        ListHeaderComponent={<Text style={styles.text}>Here are some boxes with color names</Text>}
        ListEmptyComponent={
          <View>
            <Text>empty list</Text>
          </View>
        }
        style={styles.parentStyle}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
  parentStyle: {
    paddingVertical: 80,
    padding: 20,
  },
});
