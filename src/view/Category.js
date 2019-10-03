import React from 'react'
import {Button, Text, View} from "react-native";

export default class List extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>This is Category Screen</Text>
                <Button
                    onPress={() => navigate('Category1') }
                    title="Go to Child Screen"
                />
            </View>
        )
    }
}