import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
    padding: ${props => props.theme.sizes[1]};
`

const RestaurantCardCover = styled(Card.Cover)`
`

const Title = styled.Text`
    padding-top: ${props => props.theme.sizes[0]};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover source={{ uri: photos[0] }} />
                <Title>{name}</Title>
            </RestaurantCard>
        </>
    );
}