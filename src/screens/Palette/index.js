import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from "react-native";
import Box from '../../../Box'


const Palette = () => {
    const { params: { colorPalette, name } } = useRoute();
    const { setOptions } = useNavigation();
    useEffect(() => {
        setOptions({ title: name })
    }, [setOptions, name])

    return (
        <FlatList
            data={colorPalette}
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
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
    },
    parentStyle: {
        paddingVertical: 40,
        padding: 20,
    },
});

export default Palette