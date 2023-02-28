import { StyleSheet, Button, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: "#000" }}>Home Screen</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})