import React, { useState } from 'react'

import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'

import firestore from '@react-native-firebase/firestore'

import { Welcome, Card, InputBlock, UserInput, PasswordInput, InputArea,  LoginButton, LoginButtonText, SignUpButton, SignUpText } from './styles'

export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigator = useNavigation()

    function navigateToSignUp(){
        navigator.navigate('SignUp')
    }

    async function navigateToMain(){
        const res = await firestore().collection('Usuarios').where('email','==',email).get()
        const ref = res._docs[0]._data.ref

        navigator.navigate('Main', {ref})
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
            console.log(e)
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