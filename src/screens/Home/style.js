import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    pressableStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 50,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    colorsContainer: {
        flexDirection: 'row',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
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