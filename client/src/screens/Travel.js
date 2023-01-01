import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {all, heart, headphone, heartWhite} from '../../img/image';
import getAllTravelPlaces from '../services/travel';
import { travelContext } from '../contexts/travel'

const Travel = () => {
    const { travelPlaces, setTravelPlaces } = useContext(travelContext)
    const num = Math.random()*5
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:travelPlaces[10].image[0]}}
        style={styles.banner}
        resizeMode="cover"
        imageStyle={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
        <Pressable onPress={() => navigation.goBack()}>
        </Pressable>

      </ImageBackground>
      <View style={styles.containerBottom}>
        <Text style={styles.heading}>
          {travelPlaces[10].name}
        </Text>
        <Text style={styles.tagLine}>loctaion: {travelPlaces[10].location}</Text>
        <View style={styles.stat}>
          <View style={styles.stat}>
            <Image source={heart} />
            <Text style={styles.statText}>24,234 Favorits</Text>
          </View>
          <View style={styles.stat}>
            <Image source={all} />
            <Text style={styles.statText}>34,234 Visited</Text>
          </View>
        </View>
        <Text style={styles.pickerHeading}>{travelPlaces[10].text}</Text>
        <Text style={styles.pickerHeading}>דרכי הגעה: {travelPlaces[10].ways}</Text>
      </View>
      <View
        style={{
          width: wp('100%'),
          height: hp('39%'),
        }}>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    width: wp('100%'),
    height: hp('30%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
  },
  heading: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#3F414E',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 15,
    color: '#A1A4B2',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  tagLine: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#A1A4B2',
  },
  containerBottom: {
    padding: 20,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 7,
  },
  statText: {
    color: '#A1A4B2',
    fontWeight: 'bold',
    paddingLeft: 8,
    marginRight: 35,
  },
  pickerHeading: {
    fontSize: 15,
    color: '#3F414E',
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  picker: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#E4E6FD',
    padding: 0.1,
  },
  pickerMale: {
    alignItems: 'center',
    width: wp('50%'),
  },
  pickerFemale: {
    // backgroundColor: 'green',
    width: wp('50%'),
    alignItems: 'center',
  },
  pickerFemaleText: {
    fontSize: 18,
    color: '#A1A4B2',
    // marginLeft: 15,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  pickerMaleText: {
    fontSize: 18,
    color: '#A1A4B2',
    // marginLeft: 15,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  activePickerText: {
    color: '#8E97FD',
  },
  activePickerContainer: {
    borderBottomWidth: 3,
    // borderRadius: 100,
    borderColor: '#8E97FD',
  },
});

export default Travel;