import React from 'react'
import styles from './styles'
import { View, Text, Image, TouchableOpacity, ImageBackground, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarsList from '../../components/CarsList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Model3Stack = createNativeStackNavigator();

export const Model3StackScreen = ({ navigation }) => (
    <Model3Stack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTitle: '',
            headerTransparent: true,
        }}>
        <Model3Stack.Screen
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
            name='Model3' component={Model3} />
    </Model3Stack.Navigator>
);


const Model3 = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/Model3Page.jpg')} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model 3</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <View style={styles.logoInfo}>
                        <Icon name='speedometer' color='white' size='20' />
                        <Text style={styles.mainText}>3.1 s</Text>
                    </View>
                    <Text style={styles.secondaryText}>0-60mph*</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.mainText}>358mi</Text>
                    <Text style={styles.secondaryText}>Range(EPA est.)</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.mainText}>AWD</Text>
                    <Text style={styles.secondaryText}>Dual Motor</Text>
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

export default Model3