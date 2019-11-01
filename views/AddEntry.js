import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AddEntry extends Component
{
    constructor(props) {
        super(props);
    }

    handlePress()
    {
        alert("asdfdsafa");
    }
    render() {
        return (
            <View style={{marginLeft: "5%", marginRight: "5%", width: "90%", backgroundColor: "#FF8877"}}>
                <TouchableOpacity>
                    <View>
                        <Icon onPress={this.handlePress.bind(this)} style={{textAlign: "center"}} name="add" size={50} color="#900" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}