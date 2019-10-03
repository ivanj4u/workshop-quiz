import React from 'react'
import {Button, Text, View} from "react-native";

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>This is the Home Screen</Text>
                <Button
                    onPress={() => navigate('Home1') }
                    title="Go to Child Screen"
                />
            </View>
        )
    }
}