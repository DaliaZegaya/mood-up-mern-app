import React, { useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    DailyClam
} from '../../img/image';
import { quotesContext } from '../contexts/quotes'


const DailyQuote = () => {
    const { quotes, setQuotes } = useContext(quotesContext)

    return (
        <Pressable style={{ marginBottom: 10 }}>
            <ImageBackground
                source={DailyClam}
                resizeMode="cover"
                imageStyle={{ borderRadius: 15 }}
                style={styles.quoteBanner}>
                <View>
                    <Text style={[styles.heading, { color: '#EBEAEC' }]}>
                        Daily Quote
                    </Text>
                    <Text style={{ color: '#EBEAEC', fontSize: 20, fontWeight: 'bold' }}>
                        "Today is your opportunity to build the tomorrow you want"
                    {quotes[0]?.quote}
                    </Text>
                </View>
            </ImageBackground>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
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
    }
})

export default DailyQuote;