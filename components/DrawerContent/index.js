import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width } = Dimensions.get('window');

export function DrawerContent({ props, navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                            <Icon
                                name="close"
                                size='25'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttons}>
                        <Text onPress={() => { navigation.navigate('ModelS') }} style={styles.text}>Model S</Text>
                        <Text onPress={() => { navigation.navigate('ModelX') }} style={styles.text}>Model X</Text>
                        <Text onPress={() => { navigation.navigate('Model3') }} style={styles.text}>Model 3</Text>
                        <Text onPress={() => { navigation.navigate('ModelY') }} style={styles.text}>Model Y</Text>
                        <Text onPress={() => { navigation.navigate('About') }} style={styles.text}>About</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.language} onPress={() => alert('This app is only available in english at this moment!')}>
                            <Icon name="earth" size='35' />
                            <View style={styles.languageInfo}>
                                <Text style={styles.country}>United States</Text>
                                <Text>English</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 45,
    },
    icon: {
        marginBottom: 50,
        alignItems: 'flex-end'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        height: width,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 10
    },
    language: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 120
    },
    languageInfo: {
        flexDirection: 'column',
        marginLeft: 10
    },
    country: {
        fontWeight: '600'
    }
})