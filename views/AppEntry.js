import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

export default class AppEntry extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{marginLeft: "5%", marginRight: "5%", width: "90%", backgroundColor: "#FF8877"}}>
                <View style={{flex: 1, flexDirection: "row", height: "90%"}}>
                    <View style={{width: 65, height: 65, backgroundColor: "#887655"}}></View>
                    <View>
                        <Text style={{fontSize: 20}}>{this.props.title}</Text>
                        <Text style={{fontSize: 15}}>{this.props.title}</Text>
                    </View>
                </View>
            </View>
        );
    }
}