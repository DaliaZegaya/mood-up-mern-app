import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, Pressable, Image} from 'react-native';
import {musicBackground, heartWhite, Relaxation, girlListen} from '../../img/image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';

const Music = ({navigation}) => {
  return (
    <ImageBackground
      source={musicBackground}
      style={styles.imageBackground}
      resizeMode="cover">
      
        <View style={{flex: 1}}>
          <View style={styles.yogaGirlContainer}>
          </View>
          <View style={styles.noMusicContainer}>
              <Image source={girlListen} style={styles.girl} />
            <Text style={styles.noMusicText}>No music to play 🎶</Text>
            <Pressable onPress={() => navigation.navigate('Home')}>
              <Button text="SOON" />
            </Pressable>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
            </Pressable>
          </View>
        </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  durationText: {
    fontWeight: 'bold',
    color: '#3F414E',
  },
  imageBackground: {
    flex: 1,
    backgroundColor: '#FAF7F2',
  },
  containerCenter: {
    // backgroundColor: 'red',
    height: hp('24%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  noMusicContainer: {
    alignItems: 'center',
  },
  noMusicText: {
    color: '#3F414E',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: 25,
  },
  girl:{
    marginTop: 20,
    width: wp('100%'),
    height: hp('60%')
  }
});



export default Music;