import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class task2screen extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>task2</Text>
                <Button
                    title="Go to Details"
                    
                    onPress={() => this.props.navigation.navigate('task3')}
                />
            </View>
        );
    }
}

export default task2screen;