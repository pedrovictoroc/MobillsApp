import React, { useState } from 'react'

import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as firebase from 'firebase'

import { Welcome, Card, InputBlock, UserInput, PasswordInput, InputArea,  LoginButton, LoginButtonText, SignUpButton, SignUpText } from './styles'

import Asset from './asset.svg'

import SvgUri from 'react-native-svg-uri'

import { firebaseConfig } from '../../firebaseInfos'

firebase.initializeApp(firebaseConfig)

export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigator = useNavigation()

    function navigateToSignUp(){
        navigator.navigate('SignUp')
    }

    async function handleLogin(){
        console.log('oi')
            
        try{
            await firebase.auth().createUserWithEmailAndPassword(username, password)
            navigateToSignUp()
        }catch(e){
            console.log(e)
        }
       }

    return (
        <View style={{alignItems:"center", flex: 1}}>
            <Welcome>Bem vindo!</Welcome>
        
            <Card>
                <InputBlock>
                    <UserInput>Username</UserInput>
                    <InputArea onChangeText= {(inputUser) => { setUsername(inputUser) }}/>
                    <PasswordInput>Password</PasswordInput>
                    <InputArea onChangeText= {(inputPassword) => { setPassword(inputPassword) }}/>
                </InputBlock>
            
            
                <LoginButton>
                    <LoginButtonText onPress = {() => handleLogin()}> Login </LoginButtonText>
                </LoginButton>
            </Card>
            
            <SignUpButton onPress={() => { navigateToSignUp() }}>
                <SignUpText>Clique aqui para criar uma conta</SignUpText>
            </SignUpButton>
        </View>
    )
}