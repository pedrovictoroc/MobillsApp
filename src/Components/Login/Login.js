import React, { useState } from 'react'

import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'

import { Welcome, Card, InputBlock, UserInput, PasswordInput, InputArea,  LoginButton, LoginButtonText, SignUpButton, SignUpText } from './styles'

import Asset from './asset.svg'

import SvgUri from 'react-native-svg-uri'

export default function Login(){

    const [email, setEmail] = useState("pedrovictor@alu.ufc.br")
    const [password, setPassword] = useState("87835018")

    const navigator = useNavigation()

    function navigateToSignUp(){
        navigator.navigate('SignUp')
    }

    function navigateToMain(){
        navigator.navigate('Main')
    }

    async function handleLogin(){
        if(password === "" || password === ""){
            alert('Preencha todos os campos!')
            return ;
        }

        try{
            const response = await auth().signInWithEmailAndPassword(email, password)
            
            if(response.user){
                navigateToMain()
            }

        }catch(e){    
            alert('Algo parece estar errado, verifique seu email e senha!')
        }
    }

    

    return (
        <View style={{alignItems:"center", flex: 1}}>
            <Welcome>Bem vindo!</Welcome>
        
            <Card>
                <InputBlock>
                    <UserInput>Email</UserInput>
                    <InputArea value={email} onChangeText= {(inputUser) => { setEmail(inputUser) }}/>
                    <PasswordInput>Password</PasswordInput>
                    <InputArea value={password} secureTextEntry={true} onChangeText= {(inputPassword) => { setPassword(inputPassword) }}/>
                </InputBlock>
            
            
                <LoginButton onPress = {() => handleLogin()}>
                    <LoginButtonText> Login </LoginButtonText>
                </LoginButton>
            </Card>
            
            <SignUpButton onPress={() => { navigateToSignUp() }}>
                <SignUpText>Clique aqui para criar uma conta</SignUpText>
            </SignUpButton>
        </View>
    )
}