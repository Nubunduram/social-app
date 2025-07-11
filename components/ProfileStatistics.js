import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProfileStatistics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statBlock}>
        <Text style={styles.header}>Posts</Text>
        <Text style={styles.stat}>335</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.header}>Followers</Text>
        <Text style={styles.stat}>120K</Text>
      </View>
      <View style={styles.statBlock}>
        <Text style={styles.header}>Following</Text>
        <Text style={styles.stat}>126</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statBlock: {
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  stat: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
  },
});