import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.display}>
                <View style={styles.inline}>
                    <View>
                        <Text style={styles.titleText}>
                            {"Akun"}
                        </Text>
                    </View>
                    <View style={styles.inline}>
                        <Image style={styles.imageShow} source={pic}/>
                        <Text>
                            { "Name : Ivan Jiteng Aribanilia Banon"}
                        </Text>
                    </View>
                    <View>
                        <Button
                            onPress={() => navigate('Account1') }
                            title="Go to Child Screen"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

let pic = {
    uri: 'https://hcms.pegadaian.co.id/i/lk/1491205703_p83122.jpg'
};

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f0f0',
    },
    inline: {
        flex: 2,
        padding: 5,
    },

    navigationText: {
        fontSize: 10,
        fontStyle: 'italic'
    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    bodyText: {
        fontFamily: 'Cochin'
    },

    imageShow: {
        width: 100,
        height: 165,
    }
});
