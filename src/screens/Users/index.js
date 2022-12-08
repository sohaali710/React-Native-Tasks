import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from '../style'
import { useNavigation } from '@react-navigation/native';
import routes from '../../common/routes';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
    const [users, setUsers] = useState([]);

    fetch(USERS_URL).then(data => data.json()).then(jsonData => {
        setUsers(jsonData)
    })

    const { navigate } = useNavigation();

    return (
        <FlatList
            data={users}
            renderItem={({ item }) =>
                <View style={styles.containerStyle}>
                    <Pressable onPress={() => navigate(routes.userDetails, { user: item })} style={styles.itemStyle}>
                        <Text style={styles.textStyle}>{item.name}</Text>
                        <Text>email: {item.email}</Text>
                        <Text>more details<Text style={{ fontWeight: 'bold', fontSize: 28, }}>{String.fromCharCode(8594)}</Text></Text>
                    </Pressable>
                </View>
            }
        >

        </FlatList>

    )
}

export default Users