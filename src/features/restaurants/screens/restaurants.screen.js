import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`

const SearchContainer = styled.View`
  padding-bottom: ${props => props.theme.sizes[2]};
`

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.sizes[1]};
`

export const RestaurantsScreen = () => (
  <SafeArea>
    <RestaurantListContainer>
      <SearchContainer>
        <Searchbar placeholder='Search' />
      </SearchContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);