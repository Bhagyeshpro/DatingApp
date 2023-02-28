import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
// import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}} style={styles.container}>
            <StatusBar hidden />
            <View style={styles.logoContainer}>
                {/* <Ionicons name="" size={64} color="#fff" /> */}
                <Text style={styles.logoText}>Simply Date</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign Up With Google</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10,
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxWidth: 400,
    },
    input: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        color: '#fff',
        marginTop: 20,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
