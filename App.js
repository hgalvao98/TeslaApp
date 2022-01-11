import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackScreen } from './pages/Home'
import { Model3StackScreen } from './pages/Model3'
import { ModelSStackScreen } from './pages/ModelS'
import { ModelXStackScreen } from './pages/ModelX'
import { ModelYStackScreen } from './pages/ModelY'
import { AboutStackScreen } from './pages/About'
import { Dimensions } from 'react-native';
import { DrawerContent } from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get('window');
const DrawerWidth = width * 0.7;


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerStyle: {
            width: DrawerWidth,
            left: width,
            backgroundColor: 'white',
            height: '100%'
          }
        }}
        drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Model3" component={Model3StackScreen} />
        <Drawer.Screen name="ModelS" component={ModelSStackScreen} />
        <Drawer.Screen name="ModelX" component={ModelXStackScreen} />
        <Drawer.Screen name="ModelY" component={ModelYStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer >
  );
}