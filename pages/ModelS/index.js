import React from 'react'
import styles from './styles'
import { View, Text, Image, TouchableOpacity, ImageBackground, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarsList from '../../components/CarsList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ModelSStack = createNativeStackNavigator();

export const ModelSStackScreen = ({ navigation }) => (
    <ModelSStack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTitle: '',
            headerTransparent: true,
        }}>
        <ModelSStack.Screen
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
            name='ModelS' component={ModelS} />
    </ModelSStack.Navigator>
);


const ModelS = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/ModelSPage.jpg')} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <View style={styles.logoInfo}>
                        <Icon name='speedometer' color='white' size='20' />
                        <Text style={styles.mainText}>1.99 s</Text>
                    </View>
                    <Text style={styles.secondaryText}>0-60mph*</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.mainText}>396mi</Text>
                    <Text style={styles.secondaryText}>Range(EPA est.)</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.mainText}>200 mph</Text>
                    <Text style={styles.secondaryText}>Top Speed*</Text>
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

export default ModelS