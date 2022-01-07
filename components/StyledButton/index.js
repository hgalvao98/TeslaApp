import React from 'react'
import { View, Pressable, Text } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
import styles from './styles';

const StyledButton = (props) => {

    const { type, content, onPress } = props;
    console.warn(type)
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC';


    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton