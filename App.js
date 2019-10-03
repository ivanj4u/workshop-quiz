import React from 'react';
import {createAppContainer} from 'react-navigation'
import {AppNavigation} from "./src/config/Router";
import {StyleSheet, View} from "react-native";

const NavPage = createAppContainer(AppNavigation);

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavPage/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff'
    }
});
