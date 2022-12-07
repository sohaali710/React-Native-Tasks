import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SectionList, StyleSheet, Text, View } from "react-native";

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
      { id: '5', text: 'Pressable' },
      { id: '6', text: 'Animated' },
    ],
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '6', text: 'Pressable' },
      { id: '7', text: 'Animated' },
      { id: '8', text: 'Pressable' },
      { id: '9', text: 'Animated' },
    ],
  },
  {
    id: '2',
    title: 'Advanced Components',
    data: [
      { id: '10', text: 'Pressable' },
      { id: '11', text: 'Animated' },
      { id: '12', text: 'Pressable' },
      { id: '13', text: 'Animated' },
      { id: '14', text: 'Pressable' },
      { id: '15', text: 'Animated' },
      { id: '16', text: 'Pressable' },
      { id: '17', text: 'Animated' },
    ],
  },
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.headerStyle}>{title}</Text>}
        renderItem={({ item: { text } }) => <Text style={styles.itemStyle}>{text}</Text>}
        keyExtractor={({ id }) => id}

        style={styles.parent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    paddingTop: 40,
    padding: 20,
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'lightgray',
    color: 'purple',
    padding: 7,
    marginVertical: 10,
  },
  itemStyle: {
    paddingLeft: 14,
    paddingVertical: 20,
  }
});
