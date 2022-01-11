import { View, Text, TouchableOpacity, SafeAreaView, Image, Button, Pressable } from 'react-native';
import styles from './styles';
import React from 'react'
import { DrawerActions } from '@react-navigation/native'

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Text>Menu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header