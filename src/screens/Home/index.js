import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import routes from '../../common/routes'
import { useNavigation } from '@react-navigation/native'
import { solarizedColors, twitterColors } from '../../common/colors'

const Home = () => {
    const { navigate } = useNavigation();

    const schemeList = [
        {
            id: 1,
            scheme: twitterColors,
            title: 'Twitter Colors'
        },
        {
            id: 2,
            scheme: solarizedColors,
            title: 'Solarized Colors'
        }
    ]
    return (
        <View style={styles.containerStyle}>
            {
                schemeList.map(({ id, scheme, title }) => (
                    <Pressable onPress={() => navigate(routes.palette, { colorPalette: scheme, name: title })}
                        key={id}
                        style={styles.pressableStyle}
                    >
                        <Text style={styles.textStyle}>{title}</Text>
                        <View style={styles.colorsContainer}>
                            {scheme.slice(0, 3).map(({ hexCode }) =>
                                <View style={[styles.colorItem, { backgroundColor: hexCode }]} key={hexCode} />
                            )}
                        </View>
                    </Pressable>
                ))
            }
        </View>
    )
}

export default Home