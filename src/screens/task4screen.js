import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class task4screen extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>task4</Text>
                <Button
                    title="Go to Details"
                    
                    onPress={() => this.props.navigation.navigate('task1')}
                />
            </View>
        );
    }
}

export default task4screen;