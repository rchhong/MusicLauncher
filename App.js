import React , {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Info from './views/Info'
import AppEntry from './views/AppEntry'
import AddEntry from './views/AddEntry'

const styles = StyleSheet.create({
});

export default class App extends Component
{
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex : 1, backgroundColor : "#FF9999"}}>
          <View style={{flex: 4}}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={{backgroundColor : "#998833"}}>
                <AppEntry title="asdf" />
                <AppEntry title="asdf" />
                <AddEntry />
            </ScrollView>
          </View> 
          <View style={{flex: 1, backgroundColor : "#00FF00"}}>
            <Info />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

