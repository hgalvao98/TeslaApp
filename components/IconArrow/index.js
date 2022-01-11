import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'

export default function IconArrow() {

    return (
        <View style={styles.container} >
            <Icon
                name='expand-more'
                type='material'
                size={50}
            />
        </View>
    )
}

