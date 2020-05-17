import React, { useState } from 'react'

import firestore from '@react-native-firebase/firestore'

import { View, TouchableOpacity,Text } from 'react-native'

export default function Main(){

    async function search(){
        const res = await firestore().collection('Despesas').doc('pyU7zyCmSbfkzCLeHYCk').get()
        
        const {descricao} = res.data()
        console.log(descricao)
    }

    return(
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={ () => search()}>
                <Text> Teste </Text>
            </TouchableOpacity>
        </View>
    )
}