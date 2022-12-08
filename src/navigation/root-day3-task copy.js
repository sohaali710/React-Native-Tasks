import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "react-native"
import routes from "../common/routes"
import Home from "../screens/Home"
import Palette from "../screens/Palette"

const Stack = createNativeStackNavigator()

export default function Root() {
    return <Stack.Navigator>
        <Stack.Screen name={routes.home} component={Home} options={{
            headerTitle: 'Choose Color Palette',
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
        <Stack.Screen name={routes.palette} component={Palette}
            options={{
                // headerTitle: 'Palette',
                // header: () => null,
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