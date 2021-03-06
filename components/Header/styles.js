import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 1000,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        marginTop: 10,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: 'rgba(52, 52, 52, 0.15)',
        width: 60,
        height: 30,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles