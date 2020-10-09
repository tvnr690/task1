import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class task3screen extends Component {

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>task3</Text>
                <Button
                    title="Go to Details"

                    onPress={() => this.props.navigation.navigate('task4')}
                />
            </View>
        );
    }
}

export default task3screen;