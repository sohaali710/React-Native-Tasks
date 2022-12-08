import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../style'
import { useNavigation, useRoute } from '@react-navigation/native';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const UserDetails = () => {
    const { params: { user } } = useRoute();
    const { setOptions } = useNavigation();
    useEffect(() => {
        setOptions({ user })
    }, [setOptions, user])

    return (
        <View style={[styles.itemStyle, { marginTop: 120, marginHorizontal: 14, paddingVertical: 40 }]}>
            <Text style={styles.textStyle}>{user.name}</Text>
            <View>
                <Text>user name: {user.username}</Text>
                <Text>email: {user.email}</Text>
                <Text>phone: {user.phone}</Text>
                <Text>address: {user.address.city} , {user.address.street} st.</Text>
                <Text>company: {user.company.name}</Text>
            </View>
        </View >
    )
}

export default UserDetails