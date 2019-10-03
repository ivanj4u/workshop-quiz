import React from 'react'
import {Button, Text, View} from "react-native";

export default class Introduction extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is the Introduction Screen</Text>
                <Button
                    onPress={() => navigate('Home') }
                    title="Go to Home Screen"
                />
            </View>
        )
    }
}