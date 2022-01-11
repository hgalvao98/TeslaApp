import React from 'react'
import { ImageBackground, TouchableOpacity, Text, View, Image } from 'react-native';
import CarsList from '../../components/CarsList';
import Header from '../../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: 'transparent',
            },
            headerTitle: '',
            headerTransparent: true,
        }}>
        <HomeStack.Screen
            name='Home'
            component={Home}
            options={{
                headerRight: () => (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Text>Menu</Text>
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <Image onPress={() => { navigation.navigate('Home') }} style={styles.logo} source={require('../../assets/logo.png')} />
                )
            }}
        />
    </HomeStack.Navigator>
);

export default function Home() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <CarsList />
            </View>
        </SafeAreaProvider>
    );
}


