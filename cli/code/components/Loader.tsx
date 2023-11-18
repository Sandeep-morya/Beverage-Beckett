import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import COLORS from '../constants/COLORS';

export default function Loader() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Beverage</Text>
        <Text style={styles.title}>Beckett</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {},
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },

  // image: {
  //   width: '100%',
  //   height: '100%',
  //   resizeMode: 'cover',
  // },
});
