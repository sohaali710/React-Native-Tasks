import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "react-native"
import routes from "../common/routes"
import UserDetails from "../screens/UserDetails"
import Users from "../screens/Users"

const Stack = createNativeStackNavigator()

export default function Root() {
    return <Stack.Navigator>
        <Stack.Screen name={routes.users} component={Users} options={{
            headerTitle: 'Users',
            // header: () => null,
            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#073642',
            headerTitleStyle: {
                fontSize: 28,
            },
            headerTitleAlign: 'center',
        }} />
        <Stack.Screen name={routes.userDetails} component={UserDetails}
            options={{
                headerStyle: {
                    backgroundColor: 'gray',
                },
                headerTintColor: '#073642',
                headerTitleStyle: {
                    fontSize: 28,
                },
                headerTitleAlign: 'center'
            }}
        />
    </Stack.Navigator>
}