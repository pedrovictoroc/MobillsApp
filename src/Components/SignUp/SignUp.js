import React, { useState } from 'react'

import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'

import { SignUpMessage, Card, InputBlock, UserInput, PasswordInput, InputArea,  SignUpButton, SignUpButtonText, GoBackButton, GoBackText } from './styles'


export default function SignUp(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigator = useNavigation()

    function navigateToLogin(){
        navigator.goBack()
    }

    function navigateToMain(){
        navigator.navigate('Main')
    }

    async function handleSignUp(){
        if(password === "" || password === "" || confirmPassword === ""){
            alert('Preencha todos os campos!')
            return ;
        }

        if( password !=confirmPassword){
            alert('Erro: Senhas estão diferentes!')
            return ;
        }

        try{
            const response = await auth().createUserWithEmailAndPassword(email, password)
            
            navigateToMain()
        }catch(error){
            alert('Essa conta já existe!')
        }
    }

    return (
        <View style={{alignItems:"center", flex: 1}}>
            <SignUpMessage>Cadastre-se agora!</SignUpMessage>
        
            <Card>
                <InputBlock>
                    <UserInput>Email</UserInput>
                    <InputArea value={email} onChangeText= {(inputUser) => { setEmail(inputUser) }}/>
                    <PasswordInput>Password</PasswordInput>
                    <InputArea secureTextEntry={true} value={password} onChangeText= {(inputUser) => { setPassword(inputUser) }}/>
                    <PasswordInput>Confirm Password</PasswordInput>
                    <InputArea secureTextEntry={true} value={confirmPassword} onChangeText= {(inputUser) => { setConfirmPassword(inputUser) }}/>
                </InputBlock>
            
            
                <SignUpButton onPress={() => handleSignUp()}>
                    <SignUpButtonText>Finalizar</SignUpButtonText>
                </SignUpButton>
            </Card>
            
            <GoBackButton onPress={() => { navigateToLogin() }}>
                <GoBackText>Voltar</GoBackText>
            </GoBackButton>

        </View>
    )
}