import React from 'react'

import {View} from 'react-native'

import CalendarIcon from 'react-native-vector-icons/FontAwesome'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Card, 
         InputBlock, 
         UserInput, 
         DataInput,
         InputArea, 
         GoBackButton, 
         GoBackText,
         ButtonSection} from './styles'


export default function Details(){

    const navigator = useNavigation();
    const route = useRoute();

    const operation = route.params.item

    const data = new Date(operation.data._seconds*1000)

    function navigateToMain(){
        navigator.goBack()
    }

    return(
        <View style={{alignItems:"center", flex: 1}}>
            <Card>
                <InputBlock>
                    <UserInput>Valor</UserInput>
                    <InputArea>R$ {operation.valor} </InputArea>
                    <DataInput>Descrição</DataInput>
                    <InputArea>{operation.descricao}</InputArea>
                    <CalendarIcon name='calendar'
                                  size={20}
                                  style={{paddingTop: 5}}/>
                        <InputArea>{data.getDate()}/{data.getUTCMonth()}/{data.getFullYear()}</InputArea>
                    <DataInput>Tipo</DataInput>
                    <InputArea>{operation.type}</InputArea>
                    <DataInput>Pagamento</DataInput>
                    <InputArea>{operation.concluido === true ? 'pago' : 'não pago'}</InputArea>
                </InputBlock>
            </Card>

            <ButtonSection>
                <GoBackButton onPress={() => navigateToMain()} style={{marginLeft: 20}}>
                    <GoBackText>Voltar</GoBackText>
                </GoBackButton>
            </ButtonSection>
            
        </View>
    )
}