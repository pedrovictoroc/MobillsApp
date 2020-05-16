import React from 'react'

import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { SignUpMessage, Card, InputBlock, UserInput, PasswordInput, InputArea,  SignUpButton, SignUpButtonText, GoBackButton, GoBackText } from './styles'


export default function SignUp(){

    const navigator = useNavigation()

    function navigateToLogin(){
        navigator.navigate('Login')
    }

    return (
        <View style={{alignItems:"center", flex: 1}}>
            <SignUpMessage>Cadastre-se agora!</SignUpMessage>
        
            <Card>
                <InputBlock>
                    <UserInput>Username</UserInput>
                    <InputArea/>
                    <PasswordInput>Password</PasswordInput>
                    <InputArea/>
                    <PasswordInput>Confirm Password</PasswordInput>
                    <InputArea/>
                </InputBlock>
            
            
                <SignUpButton>
                    <SignUpButtonText>Finalizar</SignUpButtonText>
                </SignUpButton>
            </Card>
            
            <GoBackButton onPress={() => { navigateToLogin() }}>
                <GoBackText>Voltar</GoBackText>
            </GoBackButton>

        </View>
    )
}