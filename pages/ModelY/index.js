import React from 'react'
import styles from './styles'
import { View, Text, Image, TouchableOpacity, ImageBackground, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarsList from '../../components/CarsList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ModelYStack = createNativeStackNavigator();

export const ModelYStackScreen = ({ navigation }) => (
    <ModelYStack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTitle: '',
            headerTransparent: true,
        }}>
        <ModelYStack.Screen
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
            name='ModelY' component={ModelY} />
    </ModelYStack.Navigator>
);


const ModelY = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/ModelYPage.jpg')} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model Y</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <View style={styles.logoInfo}>
                        <Text style={styles.mainText}>76 cu ft</Text>
                    </View>
                    <Text style={styles.secondaryText}>Cargo Space</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.mainText}>330mi</Text>
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

export default ModelY