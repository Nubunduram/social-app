import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { ProfileStatistics } from '../components/ProfileStatistics';
import { AddedImages } from '../components/AddedImages';
import { FavoritedImages } from '../components/FavoritedImages';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Background Circles */}
      <View style={{
        width: 650,
        height: 570,
        borderRadius: 155,
        borderWidth: 1,
        borderColor: '#eef2f2',
        position: 'absolute',
        top: -260,
        left: -120,
        transform: [{ rotate: '-45deg' }],
      }} />

      <View style={{
        width: 650,
        height: 570,
        borderRadius: 155,
        borderWidth: 1,
        borderColor: '#eef2f2',
        position: 'absolute',
        top: -120,
        left: -120,
        transform: [{ rotate: '-45deg' }],
      }} />

      <View style={{
        width: 650,
        height: 570,
        borderRadius: 155,
        position: 'absolute',
        top: -320,
        left: 120,
        backgroundColor: '#E1F6FA',
        transform: [{ rotate: '-45deg' }],
      }} />

      {/* Avatar */}
      <View style={{ paddingTop: 50 }}>
        <View style={{
          width: 96,
          height: 96,
          borderRadius: 35,
          borderColor: '#000000',
          borderWidth: 1,
          transform: [{ rotate: '-45deg' }],
          alignSelf: 'center',
        }}>
          <View style={{
            overflow: 'hidden',
            margin: "auto",
            borderRadius: 35,
            height: 87,
            width: 87,
          }}>
            <Image
              style={{
                height: 105,
                width: 105,
                transform: [{ rotate: '45deg' }],
                alignSelf: 'center',
              }}
              source={{
                uri: 'https://media.istockphoto.com/id/640152186/fr/photo/petit-v%C3%A9lo-pour-un-grand-gar%C3%A7on.jpg?s=2048x2048&w=is&k=20&c=LeggB9AJwtfd0O-UXWRJi9Q9Lg6HYKthsKexpp69NxY=',
              }}
            />
          </View>
        </View>

        {/* Name */}
        <Text style={{
          fontFamily: 'Poppins_700Bold',
          fontSize: 26,
          alignSelf: 'center',
          marginTop: 30,
        }}>
          John Doe
        </Text>

        {/* Username */}
        <Text style={{
          fontFamily: 'Poppins_400Regular',
          fontSize: 16,
          alignSelf: 'center',
          marginTop: 10,
        }}>
          @johndoe
        </Text>

        {/* Stats & Icons */}
        <ProfileStatistics />

        <View style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="image-outline" color="#000000" size={30} />
            <AddedImages />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Ionicons name="bookmark-outline" color="#000000" size={30} />
            <FavoritedImages />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
