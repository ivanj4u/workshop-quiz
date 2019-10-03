import React from 'react';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../view/Home";
import Category from "../view/Category";
import Account from "../view/Account";
import Home1 from "../view/Home1";
import Category1 from "../view/Category1";
import Account1 from "../view/Account1";
import Introduction from "../view/Introduction";

const HomeTab = createStackNavigator(
    {
        Home: Home,
        Home1: Home1,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#FFFFFF',
            title: 'Home Tab',

        },
    }
);

const CategoryTab = createStackNavigator(
    {
        Category: Category,
        Category1: Category1,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#FFFFFF',
            title: 'Category Tab',

        },
    }
);

const AccountTab = createStackNavigator(
    {
        Account: Account,
        Account1: Account1,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091EA',
            },
            headerTintColor: '#FFFFFF',
            title: 'Account Tab',
        },
    }
);

const BottomNavigation = createBottomTabNavigator(
    {
        Home: HomeTab,
        Category: CategoryTab,
        Account: AccountTab
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Icon size={25} name={'home'}/>
                    );
                }
                if (routeName === 'Category') {
                    return (
                        <Icon size={25} name={'menu'}/>
                    );
                } else {
                    return (
                        <Icon size={25} name={'user-o'}/>
                    );
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: '#eb4034',
            inactiveTintColor: '#263238',
        }
    },
    HomeTab.navigationOptions = ({navigation}) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
            tabBarVisible = false;
        }
        return {
            tabBarVisible
        };
    },
);

export const AppNavigation = createSwitchNavigator({
    Introduction: Introduction,
    Home: BottomNavigation,
});