import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  SafeAreaView
} from 'react-native';
import {Logo} from '../../img/image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Basics,
  Relaxation,
  DailyThought,
  DailyClam,
  increaseHappiness,
  focus,
  happiness,
} from '../../img/image';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DailyQuote from '../components/DailyQuote'
import QuotesProvider from '../contexts/quotes'

const recommendContent = [
  {
    image: focus,
    backgroundColor: '#AFDBC5',
    title: 'Focus',
    id: 0,
  },
  {
    image: happiness,
    backgroundColor: '#FBD89F',
    title: 'Happiness',
    id: 1,
  }
];

const HomeScreen = ({navigation}) => {
  let toady = new Date();
  let currentHour = toady.getHours();
  return (
    <ScrollView>
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={[styles.logo, styles.marginLarge]}>
          <Image source={Logo} />
        </View>
        <View style={[styles.header, styles.marginLarge]}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>Good </Text>
            <>
              {currentHour < 12 ? (
                <Text style={styles.headerTitleText}>Morning </Text>
              ) : currentHour < 18 ? (
                <Text style={styles.headerTitleText}>Afternoon </Text>
              ) : (
                <Text style={styles.headerTitleText}>Evening </Text>
              ) }
            </>
            <Text style={styles.headerTitleText}>
              Dalia
            </Text>
          </View>
          <Text style={styles.headerSubTitleText}>
            We Wish you have a good day
          </Text>
        </View>
        <QuotesProvider><DailyQuote/></QuotesProvider> 
        <View style={[styles.bigBoxContainer, styles.marginMedium]}>
          <View style={[styles.bigBox, {backgroundColor: '#8E97FD'}]}>
            <View style={styles.bigBoxTop}>
              <Image source={Basics} style={{borderRadius: 13}} />
            </View>
            <View style={styles.bigBoxMedium}>
              <Text style={[styles.heading, {color: '#FFECCC'}]}>Travel</Text>
              <Text style={[styles.subHeading, , {color: '#F7E8D0'}]}>
                PLACES
              </Text>
            </View>
            <View style={styles.bigBoxBottom}>
              <Text style={{color: '#EBEAEC'}}>3-10 MIN</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('Travel', {
                    name: 'Travel',
                    subHeading: 'PLACES',
                    id: 1,
                  })
                }
                style={[styles.shortButton, {backgroundColor: '#EBEAEC'}]}>
                <Text style={{color: '#3F414E', fontWeight: 'bold'}}>
                  START
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.bigBox, {backgroundColor: '#FFDB9D'}]}>
            <View style={styles.bigBoxTop}>
              <Image source={Relaxation} style={{borderRadius: 13}} />
            </View>
            <View style={styles.bigBoxMedium}>
              <Text style={[styles.heading, {color: '#3F414E'}]}>
                Relaxation
              </Text>
              <Text style={[styles.subHeading, , {color: '#524F53'}]}>
                MUSIC
              </Text>
            </View>
            <View style={styles.bigBoxBottom}>
              <Text style={{color: '#524F53'}}>3-10 MIN</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('Music', {
                    name: 'Music',
                    subHeading: 'MUSIC',
                    id: 2,
                  })
                }
                style={[styles.shortButton, {backgroundColor: '#3F414E'}]}>
                <Text style={{color: '#FEFFFE', fontWeight: 'bold'}}>
                  START
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Pressable>
          <ImageBackground
            source={DailyThought}
            resizeMode="cover"
            imageStyle={{borderRadius: 15}}
            style={styles.banner}>
            <View>
              <Text style={[styles.heading, {color: '#EBEAEC'}]}>
                Daily Thought
              </Text>
              <Text style={{color: '#EBEAEC', fontSize: 13}}>
                MEDITATION {'\uFF65'} 3-10 MIN
              </Text>
            </View>
            <View style={styles.actionButton}>
              <Icon name="play" size={20} color="#3F414E" />
            </View>
          </ImageBackground>
        </Pressable>
      </View>
      <View style={styles.recommendation}>
        <Text
          style={[
            styles.headerTitleText,
            styles.marginMedium,
            {marginLeft: 15},
          ]}>
          Recomended for you
        </Text>
        <ScrollView
          horizontal={true}
          style={{
            height: hp('25%'),
          }}
          contentContainerStyle={{
            alignItems: 'center',
            paddingLeft: 15,
          }}>
          {recommendContent.map(item => (
            <Pressable key={item.id}
              style={styles.recommendContainer}
              onPress={() =>
                navigation.navigate('CourseDetails', {
                  name: item.title,
                  subHeading: 'Meditation',
                  id: item.id,
                })
              }>
              <ImageBackground
                source={item.image}
                resizeMode="contain"
                style={[
                  styles.recommendContainerTop,
                  {backgroundColor: item.backgroundColor},
                ]}></ImageBackground>
              <View style={styles.recommendContainerBottom}>
                <Text style={[styles.heading, {color: '#3F414E'}]}>
                  {item.title}
                </Text>
                <Text style={{color: '#A1A4B2'}}>
                  MEDITATION {'\uFF65'} 3-10 MIN
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 17,
  },
  logo: {
    alignItems: 'center',
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerTitleText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: '#3F414E',
  },
  headerSubTitleText: {
    fontSize: 19,
    fontFamily: 'sans-serif',
    color: '#A1A4B2',
  },
  quoteBanner: {
    height: hp('15%'),
    width: wp('92%'),
    backgroundColor: '#ECD3C2',
    borderRadius: 15,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bigBox: {
    width: wp('44%'),
    height: hp('25%'),
    borderRadius: 13,
  },
  bigBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bigBoxTop: {
    alignItems: 'flex-end',
  },
  bigBoxMedium: {
    padding: 15,
    paddingTop: 0,
  },
  bigBoxBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    marginTop: -18,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  subHeading: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'sans-serif',
  },
  shortButton: {
    width: wp('20%'),
    height: hp('4.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  banner: {
    height: hp('15%'),
    width: wp('92%'),
    backgroundColor: '#333242',
    borderRadius: 15,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    width: wp('11%'),
    height: hp('5.2%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
  },
  recommendation: {
    marginBottom: -95
  },
  recommendContainer: {
    height: hp('25%'),
    width: wp('42%'),
    marginRight: 15,
  },
  recommendContainerTop: {
    height: hp('18%'),
    width: wp('42%'),
    borderRadius: 15,
  },
  recommendContainerBottom: {
    height: hp('18%'),
  },
  marginMedium: {
    marginBottom: 15,
  },
  marginLarge: {
    marginBottom: 18,
  },
});


export default HomeScreen;
