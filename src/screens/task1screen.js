import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class task1screen extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>task1</Text>
                <Button
                    title="Go to Details"
                    
                    onPress={() => this.props.navigation.navigate('task2')}
                />
            </View>
        );
    }
}

export default task1screen;