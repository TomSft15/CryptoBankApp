import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.title}>Welcome to</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.title}>BankCryptoWallet</Text>
        </View>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Password' style={styles.input} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
            <Text style={{ color: '#fff' }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGoogle}>
            <Image source={require('../../assets/logoGoogle.png')} style={{width: 30, height: 30, marginEnd: 10}} />
            <Text style={{ color: '#fff' }}>Sign In with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonApple}>
            <Image source={require('../../assets/logoApple.png')} style={{width: 26, height: 32, marginEnd: 15}} />
            <Text style={{ color: '#fff' }}>Sign In with Apple</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
            <Text style={{ color: '#000000FF', fontWeight: 'bold' }}>Register</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#000'
    },
    subTitle: {
      fontSize: 20,
      color: '#000',
      marginTop: 80,
    },
    input: {
      borderColor: 'gray',
      // borderWidth: 1,
      padding: 10,
      paddingStart: 20,
      width: '80%',
      marginTop: 20,
      borderRadius: 20,
      height: 45,
      backgroundColor: '#fff'
    },
    button: {
      backgroundColor: '#000000FF',
      width: '30%',
      padding: 10,
      borderRadius: 25,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
    },
    buttonGoogle: {
        flexDirection: 'row',
        backgroundColor: '#000000FF',
        width: '60%',
        padding: 10,
        borderRadius: 25,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
    },
    buttonApple: {
        flexDirection: 'row',
        backgroundColor: '#000000FF',
        width: '60%',
        padding: 10,
        borderRadius: 25,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
      },
    registerText: {
      marginTop: 50,
      color: '#000',
    },
});

export default LoginPage;