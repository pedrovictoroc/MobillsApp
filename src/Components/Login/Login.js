import React from 'react'

import { View } from 'react-native'

import { Svg } from 'react-native-svg'

import { Welcome, Card, InputBlock, UserInput, PasswordInput, InputArea,  LoginButton, LoginButtonText } from './styles'

import asset from './asset.svg'

export default function Login(){
    return (
        <View style={{alignItems:"center"}}>
            <Welcome>Bem vindo!</Welcome>
        
            <Card>
                <InputBlock>
                    <UserInput>Username</UserInput>
                    <InputArea/>
                    <PasswordInput>Password</PasswordInput>
                    <InputArea/>
                </InputBlock>
            </Card>

            <LoginButton>
                <LoginButtonText> Login </LoginButtonText>
            </LoginButton>
        </View>
    )
}