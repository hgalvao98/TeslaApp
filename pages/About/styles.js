import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 30,
        marginBottom: 30
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600'
    },
    text: {
        marginTop: 30,
        marginBottom: 30
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