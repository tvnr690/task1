import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BottomTrending extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>BottomTrending Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('')}
                />
            </View>
        );
    }
}

export default BottomTrending;