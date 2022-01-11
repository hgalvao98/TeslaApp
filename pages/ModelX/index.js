import React from 'react'
import styles from './styles'
import { View, Text, Image, TouchableOpacity, ImageBackground, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarsList from '../../components/CarsList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ModelXStack = createNativeStackNavigator();

export const ModelXStackScreen = ({ navigation }) => (
    <ModelXStack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTitle: '',
            headerTransparent: true,
        }}>
        <ModelXStack.Screen
            options={{
                headerRight: () => (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Text style={styles.buttonColor}>Menu</Text>
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={styles.logoBackground}><Image style={styles.logo} source={require('../../assets/logo.png')} /></TouchableOpacity>
                )
            }}
            name='ModelX' component={ModelX} />
    </ModelXStack.Navigator>
);


const ModelX = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/ModelXPage.jpg')} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model X</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <View style={styles.logoInfo}>
                        <Icon name='speedometer' color='white' size='20' />
                        <Text style={styles.mainText}>2.5 s</Text>
                    </View>
                    <Text style={styles.secondaryText}>0-60mph*</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.mainText}>333mi</Text>
                    <Text style={styles.secondaryText}>Range(EPA est.)</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.mainText}>9.9s</Text>
                    <Text style={styles.secondaryText}>1/4 Mile</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { alert('Ordered!') }}>
                    <Text style={styles.buttonText}>ORDER NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModelX