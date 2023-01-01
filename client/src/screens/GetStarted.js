import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  ToastAndroid,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  darkShodow,
  betterSleep,
  reduceStress,
  improvePerformance,
  reduceAnxiety,
  personalGrowth,
  increaseHappiness,
  increaseConcentration,
  happiness,
  kids
} from '../../img/image';

const GetStarted = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hey Dalia</Text>
      <ImageBackground
        source={darkShodow}
        resizeMode="contain"
        style={styles.cloud}>
        <Text style={styles.subHeading}>How Are You Today?</Text>
        <Text style={styles.tagLine}>Choose your mood</Text>
      </ImageBackground>
      <View style={styles.boxContainer}>
        <View style={styles.column1}>
        <Pressable
            style={[styles.smallBox, {backgroundColor: '#FEB18F'}]}
            onPress={() => navigation.navigate('Home')}
            >
            <View style={[styles.imageIconContainer, {marginTop: 5}]}>
              <Image source={increaseHappiness} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.makeTextWhite}>Great</Text>
            </View>
          </Pressable>

          <Pressable
            style={[styles.bigBox, {backgroundColor: '#FFCF86'}]}
            onPress={() => navigation.navigate('Home')}
            >
            <View style={[styles.imageIconContainer, , {marginTop: 5}]}>
              <Image source={reduceAnxiety} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.makeTextBlack}>Bad</Text>
            </View>
          </Pressable>

        </View>
        <View style={styles.column2}>
        <Pressable
            style={[styles.bigBox, {backgroundColor: '#8E97FD'}]}
            onPress={() => navigation.navigate('Home')}
            >
            <View style={styles.imageIconContainer}>
              <Image source={happiness} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.makeTextWhite}>Good</Text>
            </View>
          </Pressable>

          <Pressable
            style={[styles.smallBox, {backgroundColor:'#88ca99'}]}
            onPress={() => navigation.navigate('Home')}
            >
            <View style={styles.imageIconContainer}>
              <Image style={styles.sad} source={kids} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.makeTextBlack}>Awful</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cloud: {
    width: wp('100%'),
    height: hp('14%'),
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: '700',
    color: '#3F414E',
    marginTop: 35,
    marginLeft: 15,
  },
  subHeading: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    color: '#3F414E',
    marginLeft: 15,
    marginBottom: 15,
  },
  tagLine: {
    fontSize: 22,
    color: '#A1A4B2',
    marginLeft: 15,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  column1: {
    width: wp('42%'),
  },
  column2: {
    width: wp('42%'),
  },
  bigBox: {
    backgroundColor: 'red',
    height: hp('28%'),
    borderRadius: 10,
    marginBottom: wp('4%'),
    justifyContent: 'space-between',
  },
  smallBox: {
    backgroundColor: 'green',
    height: hp('22%'),
    borderRadius: 10,
    marginBottom: wp('4%'),
    justifyContent: 'space-between',
  },
  imageIconContainer: {
    alignItems: 'center',
  },
  makeTextWhite: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFECCC',
  },
  makeTextBlack: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  boxText: {
    padding: 15,
  },
  sad: {
    width: wp('30%'),
    height: hp('15%')
  }
});

export default GetStarted;