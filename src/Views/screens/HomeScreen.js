import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import COLORS from '../../const/colors';

const {height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView style = {{flex:1, color : COLORS.white, alignItems:'center', justifyContent:'center'}}>
            <Text>This is Home, cool right?</Text>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    abc:{
    }
});

export default HomeScreen;
