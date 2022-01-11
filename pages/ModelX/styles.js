import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 100,
        backgroundColor: 'red'
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    logoBackground: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: 120,
        height: 30,
        marginTop: 8,
        marginLeft: -8,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'rgba(52, 52, 52, 0.15)',
        width: 60,
        height: 30,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonColor: {
        color: 'white'
    },
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
        display: 'flex',
        alignItems: 'center'
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
        color: 'white'
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    subtitleCTA: {
        textDecorationLine: 'underline'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        width: '80%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 20,
        borderWidth: 2.5,
        borderColor: 'white'
    },
    iconContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    buttonText: {
        color: 'white'
    },
    mainText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 22,
        paddingLeft: 2
    },
    secondaryText: {
        color: 'white',
        marginTop: 6
    },
    infoContainer: {
        position: "absolute",
        bottom: 100,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginHorizontal: 10
    },
    logoInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default styles