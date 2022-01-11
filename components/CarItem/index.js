import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import IconArrow from '../IconArrow';

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props.car;
    return (

        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton
                    content={"Custom Order"}
                    onPress={() => {
                        alert('Please wait while we confirm you are not an robot')
                    }}
                    type='primary' />
                <StyledButton
                    content={"Existing Inventory"}
                    onPress={() => {
                        alert('There are 0 units in inventory')
                    }}
                    type='secondary' />
            </View>
            {name === 'Model S' ?
                <View style={styles.iconContainer}>
                    <IconArrow />
                </View> : undefined
            }
        </View>


    )
}

export default CarItem