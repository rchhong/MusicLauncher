import React, {Component} from 'react'
import {
    View,
    Button,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddEntry extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{marginLeft: "5%", marginRight: "5%", width: "90%", backgroundColor: "#FF8877"}}>
                <Button
                icon={
                    <Icon
                    name="glass"
                    size={15}
                    color="white"
                    />
                }
                title="Button with icon component"
                />
            </View>
        );
    }
}