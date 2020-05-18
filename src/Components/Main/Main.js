import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import { View ,StatusBar, Dimensions} from 'react-native'

import firestore from '@react-native-firebase/firestore'

import { MoneyHeader, 
         HeaderText, 
         HeaderTextBold, 
         NewTransactionButton, 
         NewTransactionText, 
         OperationsList, 
         OperationContainer, 
         PropertyContainer, 
         OperationProperty, 
         OperationValue,
         OperationButtomContainer,
         OperationButtom } from './styles'

export default function Main(){

    const [operations, setOperations] = useState([])
    const [totalValue, setTotalValue] = useState("")

    const navigator = useNavigation()

    function navigateToNewOperation(){
        navigator.navigate('NewOperation')
    }

    useEffect(()=>{
        async function search(){
            const res = await firestore().collection('Usuarios').doc('wMWMt47Fl3SWBq3Hwyps').collection('Operacoes').get()
            
            //console.log(res.docs[0]._data)
            setOperations(res.docs)
        }

        async function sumValues(){
            
            let x = 0;

            await operations.map((operation)=> {
                if(operation._data.type == 'despesa'){
                    x = x - operation._data.valor
                
                }else{
                    x = x + operation._data.valor
                }
            })
        
            setTotalValue(x)
        }
        search()
        
        sumValues()
        
    },[])

    return(
        <View style={{flex:1, paddingHorizontal: 12,paddingTop: StatusBar.currentHeight}}>

        
            <MoneyHeader width={Dimensions.get('window').width - 24}>
                <HeaderText> 
                    R$ <HeaderTextBold value = {totalValue}>{totalValue}</HeaderTextBold>
                </HeaderText>
            </MoneyHeader>

            <NewTransactionButton onPress = {() => navigateToNewOperation()} width={Dimensions.get('window').width - 24}>
                    <NewTransactionText>
                        Nova operação
                    </NewTransactionText>
            </NewTransactionButton>
        
            <OperationsList
                data={operations}
                keyExtractor={operation => String(operation.index)}
                showsVerticalScrollIndicator={true}
                renderItem={(operation) => (
                    <OperationContainer>
                        <PropertyContainer>
                            <OperationProperty>Valor: </OperationProperty>
                            <OperationValue type = {operation.item._data.type}>
                                {operation.item._data.type === 'despesa' ? '-' : '+'}
                                {operation.item._data.valor}
                            </OperationValue>
                        </PropertyContainer>

                        <OperationButtomContainer>
                            {operation.item._data.concluido === true ? console.log(operation.item._data.concluido) : <OperationButtom> A </OperationButtom>}
                            <OperationButtom onPress={() => console.log(operation.item._data.concluido)}> C </OperationButtom>
                        </OperationButtomContainer>
                    </OperationContainer>
                )}
            />
            
        </View>
    )
}