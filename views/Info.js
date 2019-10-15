import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "#FF0000",
      flexGrow: 5
    },
    body: {
      backgroundColor: "#FFFFFF",
    },
});

export default class Info extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>aa</Text>
                <Text>aa</Text>
                <Text>aa</Text>
            </View>
        );
    }
}