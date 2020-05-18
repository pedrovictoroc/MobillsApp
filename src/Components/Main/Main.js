import React, { useState, useEffect, useMemo } from 'react'

import { useNavigation } from '@react-navigation/native'

import { View ,StatusBar, Dimensions} from 'react-native'

import firestore from '@react-native-firebase/firestore'

import DoneIcon from 'react-native-vector-icons/MaterialIcons'

import TrashIcon from 'react-native-vector-icons/FontAwesome5'

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

    async function handleDelete({_data: data}){
        const res = await firestore()
              .collection('Usuarios')
              .doc('wMWMt47Fl3SWBq3Hwyps')
              .collection('Operacoes')
              .where('ID','==' ,data.ID)
              .get()
              
        const ref = res._docs[0]._ref._documentPath._parts[3]
        await firestore()
                .collection('Usuarios')
                .doc('wMWMt47Fl3SWBq3Hwyps')
                .collection('Operacoes')
                .doc(ref)
                .delete()
        
        alert(`Operação no valor de R$${data.valor} deletada com sucesso!`)
    }

    async function handleDone({_data : data}){
        if (data.concluido){
            alert('O status será modificado para "não pago"')
        }

        const res = await firestore()
              .collection('Usuarios')
              .doc('wMWMt47Fl3SWBq3Hwyps')
              .collection('Operacoes')
              .where('ID','==' ,data.ID)
              .get()

        const ref = res._docs[0]._ref._documentPath._parts[3]
    
        const done = !data.concluido

        await firestore()
                .collection('Usuarios')
                .doc('wMWMt47Fl3SWBq3Hwyps')
                .collection('Operacoes')
                .doc(ref)
                .update({concluido: done})
        
    }

    useEffect(()=>{
        async function search(){
            const res = await firestore()
                        .collection('Usuarios')
                        .doc('wMWMt47Fl3SWBq3Hwyps')
                        .collection('Operacoes')
                        .onSnapshot(query=>{
                            const ops = []

                            query.forEach(document =>{
                                ops.push(document)
                            })

                            setOperations(ops)
                        })
            
            //console.log(res.docs[0]._data)
            setOperations(res.docs)
        }
        
        search()
        
    },[])

    const value = useMemo(() => {
        async function sumValues(){
            
            let x = 0;

            await operations.map((operation)=> {
                if(operation._data.type == 'despesa'){
                    x = x - Number(operation._data.valor)
                
                }else{
                    x = x + Number(operation._data.valor)
                }
            })
        
            setTotalValue(x)
        }

        sumValues()
    },[operations])

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
                keyExtractor={operation => String(operation.ID)}
                showsVerticalScrollIndicator={true}
                renderItem={({item}) => (
                    <OperationContainer>
                        <PropertyContainer>
                            <OperationProperty>Valor: </OperationProperty>
                            <OperationValue type = {item._data.type}>
                                {item._data.type === 'despesa' ? '-' : '+'}
                                {item._data.valor}
                            </OperationValue>
                        </PropertyContainer>

                        <OperationButtomContainer>
                            <OperationButtom onPress={()=> handleDone(item)} value={'done'}>
                                {item._data.concluido === true ?
                                    <DoneIcon name="done" size={20}
                                              color="#65BCBF" />
                                        : 
                                <DoneIcon name="done"
                                          size={20}
                                          color="#F8777D" />}
                            </OperationButtom>

                            <OperationButtom onPress={() => handleDelete(item)}>
                                <TrashIcon name="trash"
                                           size={20}
                                           /> 
                            </OperationButtom>
                        </OperationButtomContainer>
                    </OperationContainer>
                )}
            />
            
        </View>
    )
}