import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

const CarItem = (props) => {
    return (
        <View>
            <View style={styles.carContainer}>
                <ImageBackground source={require('./assets/ModelX.jpeg')} style={styles.image} />
                <View style={styles.titles}>
                    <Text style={styles.title}>Model S</Text>
                    <Text style={styles.subtitle}>Starting at $69,999</Text>
                </View>
            </View>
        </View>
    )
}

export default CarItem