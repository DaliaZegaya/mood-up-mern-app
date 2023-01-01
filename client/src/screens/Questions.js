import React, { useState, useContext } from 'react';
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
    musicBackground,
} from '../../img/image';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../components/Button';
import { questionsContext } from '../contexts/questions'

const HappinesOptions = [
    {
        id: 1,
        text: 'Family',
    },
    {
        id: 2,
        text: 'Friends',
    },
    {
        id: 3,
        text: 'Travel',
    },
    {
        id: 4,
        text: 'Sport',
    },
    {
        id: 5,
        text: 'Music',
    },
];
const MusicOptions = [
    {
        id: 1,
        text: 'Pop',
    },
    {
        id: 2,
        text: 'R&B',
    },
    {
        id: 3,
        text: 'Rock',
    },
    {
        id: 4,
        text: 'Soul',
    },
    {
        id: 5,
        text: 'Jazz',
    },
];

const QuestionsScreen = ({ navigation }) => {
    const { questions, setQuestions } = useContext(questionsContext)

    const [listArray, setListArray] = useState(new Set([]));

    const ActiveOptionsFilter = optionId => {
        listArray.delete(optionId);
        setListArray(new Set([...listArray]));
    };

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={musicBackground}
                style={styles.imageBackground}
                resizeMode="cover">
                <View >
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Before we start, we want to</Text>
                        <Text style={styles.heading}>get to know you a little better</Text>

                    </View>

                    {
                questions?.map(item => {
                    return (
                        <View key={item.id}>
                        <View style={styles.headingContainer}>
                        <Text style={styles.heading}>{item.question}</Text>
                    </View>
                    <Text style={styles.tagLine}>
                        You can choose several options
                    </Text>

                    <View style={styles.dayContainer}>
                        {HappinesOptions.map(item => (
                            <Pressable
                                key={item.id}
                                style={[styles.day, listArray.has(item.id) && styles.activeDay]}
                                onPress={() =>
                                    listArray.has(item.id)
                                        ? ActiveOptionsFilter(item.id)
                                        : setListArray(() => new Set([...listArray, item.id]))
                                }>
                                <Text
                                    style={[
                                        styles.dayText,
                                        listArray.has(item.id) && styles.activeDayText,
                                    ]}>
                                    {item.text}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                    </View>
                    )
                })
            }

                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>What music do you like</Text>
                        <Text style={styles.heading}>to listen to?</Text>
                    </View>
                    <Text style={styles.tagLine}>
                        You can choose several options
                    </Text>

                    <View style={styles.dayContainer}>
                        {MusicOptions.map(day => (
                            <Pressable
                                key={day.id}
                                style={[styles.day, listArray.has(day.id) && styles.activeDay]}
                                onPress={() =>
                                    listArray.has(day.id)
                                        ? ActiveOptionsFilter(day.id)
                                        : setListArray(() => new Set([...listArray, day.id]))
                                }>
                                <Text
                                    style={[
                                        styles.dayText,
                                        listArray.has(day.id) && styles.activeDayText,
                                    ]}>
                                    {day.text}
                                </Text>
                            </Pressable>
                        ))}
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.navigate('Profile')}>
                            <Button text="SAVE" />
                        </Pressable>
                        <Text style={styles.cancelText} onPress={() => navigation.navigate('Profile')}>
                            SKIP
                        </Text>
                    </View>
                </View>
            </ImageBackground >
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'sans-serif',
        color: '#3F414E',
    },
    tagLine: {
        fontSize: 15,
        color: '#A1A4B2',
        fontFamily: 'sans-serif',
    },
    headingContainer: {
        marginTop: hp('4%'),
        marginBottom: 10,
    },
    timer: {
        height: hp('25%'),
        backgroundColor: '#E1E1E5',
        marginTop: hp('4%'),
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
    },
    dayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: hp('7%'),
        marginTop: hp('4%'),
    },
    day: {
        backgroundColor: 'white',
        borderWidth: 2,
        padding: 13,
        borderRadius: 50,
        borderColor: '#A1A4B2',
    },
    activeDay: {
        backgroundColor: '#3F414E',
        borderWidth: 0,
        borderWidth: 2,
        borderColor: '#3F414E',
    },
    activeDayText: {
        color: 'white',
    },
    dayText: {
        fontWeight: 'bold',
        color: '#A1A4B2',
    },
    cancelText: {
        textAlign: 'center',
        marginTop: wp('4%'),
        fontWeight: 'bold',
        color: '#3F414E',
    },
});


export default QuestionsScreen;
