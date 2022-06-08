import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder='Search' />
        </View>
        <View style={styles.list}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16
  },
  list: {
    flex: 1,
    padding: 16,
  }
})