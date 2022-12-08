import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemStyle: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    colorItem: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 2,
        marginVertical: 3,
        marginLeft: 10,
    }

})

export default styles