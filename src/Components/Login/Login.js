import React from 'react'

import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Welcome, Card, InputBlock, UserInput, PasswordInput, InputArea,  LoginButton, LoginButtonText, SignUpButton, SignUpText } from './styles'

import Asset from './asset.svg'

import SvgUri from 'react-native-svg-uri'

export default function Login(){

    const navigator = useNavigation()

    function navigateToSignUp(){
        navigator.navigate('SignUp')
    }

    return (
        <View style={{alignItems:"center", flex: 1}}>
            <Welcome>Bem vindo!</Welcome>
        
            <Card>
                <InputBlock>
                    <UserInput>Username</UserInput>
                    <InputArea/>
                    <PasswordInput>Password</PasswordInput>
                    <InputArea/>
                </InputBlock>
            
            
                <LoginButton>
                    <LoginButtonText> Login </LoginButtonText>
                </LoginButton>
            </Card>
            
            <SignUpButton onPress={() => { navigateToSignUp() }}>
                <SignUpText>Clique aqui para criar uma conta</SignUpText>
            </SignUpButton>
        </View>
    )
}