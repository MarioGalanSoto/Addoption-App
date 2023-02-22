import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    useDrawerProgress,
    useDrawerStatus,
} from '@react-navigation/drawer';


import React from 'react';
import { View, Image, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import COLORS from '../../const/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';
import { StatusBar } from 'react-native-web';

const Drawer = createDrawerNavigator();

const CustomerDrawerContent = props => {
    return <DrawerContentScrollView
        style={{ paddingVertical: 30 }}>
        <View style={{ marginLeft: 20, marginVertical: 40 }}>

            <Image
                source={require('../../../assets/profile-image.jpg')}
                style={{ height: 70, width: 70, borderRadius: 20, }}>

            </Image>

            <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 13, marginTop: 10, }}>
                Jane Gary
            </Text>

        </View>

        <DrawerItemList {...props} />
    </DrawerContentScrollView >
}

const DrawerScreenContainer = ({ children }) => {
    const isDrawerOpen = useDrawerStatus();
    const progress = useDrawerProgress();
    const scale = Animated.interpolateNode(progress.value, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolateNode(progress.value, {
        inputRange: [0, 1],
        outputRange: [0, 25],
    });
    return (
        <Animated.View
            style={{
                backgroundColor: COLORS.white,
                flex: 1,
                transform: [{ scale }],
                borderRadius,
                overflow: 'hidden',
            }}>
            <StatusBar barStyle="dark-content" backgroundColor={isDrawerOpen == "open" ? COLORS.primary : COLORS.white} />
            {children}
        </Animated.View>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator

            screenOptions={{
                headerShown: false,
                drawerType: 'slide',
                drawerStyle: {
                    backgroundColor: COLORS.primary,
                    width: 200,
                },
                overlayColor: null,
                sceneContainerStyle: {
                    backgroundColor: COLORS.primary,
                },
                drawerActiveTintColor: COLORS.white,
                drawerInactiveTintColor: COLORS.secondary,
                drawerItemStyle: { backgroundColor: null },
                drawerLabelStyle: {
                    fontWeight: 'bold',

                }
            }}

            drawerContent={props => <CustomerDrawerContent {...props} />}>

            <Drawer.Screen
                name="Home"
                options={{
                    title: "ADOPTION",
                    drawerIcon: ({ color }) => (

                        <Icon
                            name='paw'
                            size={25}
                            color={color}
                            style={{ marginRight: -20 }} />
                    ),
                }}>

                {props => <DrawerScreenContainer>
                    <HomeScreen {...props} />
                </DrawerScreenContainer>}
            </Drawer.Screen>

            <Drawer.Screen
                name="DONATION"
                options={{
                    drawerIcon: ({ color }) => (

                        <Icon
                            name='gift'
                            size={25}
                            color={color}
                            style={{ marginRight: -20 }} />
                    ),
                }}>

                {props => <DrawerScreenContainer>
                    <HomeScreen {...props} />
                </DrawerScreenContainer>}
            </Drawer.Screen>

            <Drawer.Screen
                name="ADD PET"
                options={{
                    drawerIcon: ({ color }) => (

                        <Icon
                            name='plus-box'
                            size={25}
                            color={color}
                            style={{ marginRight: -20 }} />
                    ),
                }}>

                {props => <DrawerScreenContainer>
                    <HomeScreen {...props} />
                </DrawerScreenContainer>}
            </Drawer.Screen>

            <Drawer.Screen
                name="FAVOURITES"
                options={{
                    drawerIcon: ({ color }) => (

                        <Icon
                            name='heart'
                            size={25}
                            color={color}
                            style={{ marginRight: -20 }} />
                    ),
                }}>

                {props => <DrawerScreenContainer>
                    <HomeScreen {...props} />
                </DrawerScreenContainer>}
            </Drawer.Screen>

            <Drawer.Screen
                name="PROFILE"
                options={{
                    drawerIcon: ({ color }) => (

                        <Icon
                            name='account'
                            size={25}
                            color={color}
                            style={{ marginRight: -20 }} />
                    ),
                }}>

                {props => <DrawerScreenContainer>
                    <HomeScreen {...props} />
                </DrawerScreenContainer>}
            </Drawer.Screen>

        </Drawer.Navigator>
    )
}

export default DrawerNavigator;