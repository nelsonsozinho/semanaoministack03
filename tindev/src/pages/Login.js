import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Image, Platform, TextInput, Text, TouchableOpacity} from 'react-native';

import logo from "../assets/logo.png";

export default function Login() {
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behaviour="padding"
            enabled={Platform.OS === 'ios'}
            >
            <Image source={logo}/>
            
            <TextInput 
                autoCapitalize="none" 
                autoCorrect={false} 
                placeholder="Digite seu usuário Github" 
                placeholderTextColor="#999" 
                style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#f5f5f5",
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 30
    }, 

    input: {
        height: 46, 
        alignSelf: "stretch", 
        backgroundColor: "#fff", 
        borderWidth: 1, 
        borderLeftColor: '#ddd',
        borderRadius: 4, 
        marginTop: 20,
        paddingHorizontal: 15
    }, 

    button: {
        height: 46,
        alignSelf: "stretch", 
        backgroundColor: "#df4723",
        borderRadius: 4, 
        marginTop: 10,
        justifyContent: "center", 
        alignItems: "center"
    }, 

    buttonText: {
        color: "#fff",
        fontWeight: "bold", 
        fontSize: 16
    }
});