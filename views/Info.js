import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

const styles = StyleSheet.create({
});

export default class Info extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row",  marginLeft: '5%', marginTop: "5%"}}>
                    <View style={{ width: 65, height: 65, backgroundColor: "#FFFFFF" }} />
                    <View style={{ flexDirection: "column", marginLeft: 10 }}>
                        <Text style={{ fontSize: 30 }}>aaaaaaa</Text>
                        <Text style={{ fontSize: 15 }}>aaa</Text>
                    </View>
                </View>
                <View style={{flex: 1, marginTop: '5%', marginLeft: "3%", flexDirection: 'row', width: "50%", justifyContent: "space-around"}}>
                    <View>
                    <Button title="Prev"/>
                    </View>
                    <View>
                    <Button title="Pause"/>
                    </View>
                    <View>
                    <Button title="Next"/>
                    </View>
                </View>
            </View>

        );
    }
}