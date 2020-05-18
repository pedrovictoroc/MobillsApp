import React, { useState, useEffect, useMemo } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

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
    const route = useRoute();

    const ref = route.params.ref

    function navigateToNewOperation(){
        navigator.navigate('NewOperation',{ref})
    }

    function navigateToDetails(item){
        navigator.navigate('Details',{item})
    }

    function removeByAttr(arr, attr, value){
        var i = arr.length;
        while(i--){
           if( arr[i] 
               && arr[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && arr[i][attr] === value ) ){ 
    
               arr.splice(i,1);
    
           }
        }
        return arr;
    }

    async function handleDelete(data){
        const ops = operations

        const filtered = removeByAttr(ops, 'ID', data.ID)

        await firestore()
                .collection('Usuarios')
                .doc(ref)
                .update({operations: filtered})

    }

    async function handleDone(data){

        if (data.concluido){
            alert('O status será modificado para "não pago"')
        }

        const ops = operations

        ops.map((value, index)=>{
            if(value.ID === data.ID){
                const done = !data.concluido

                value.concluido = done
            }
        })

        await firestore()
                .collection('Usuarios')
                .doc(ref)
                .update({operations: ops})
    }

    useEffect(()=>{
        async function search(){

            const res = await firestore()
                        .collection('Usuarios')
                        .doc(ref)
                        .onSnapshot(query=>{
                            const ops = query._data.operations

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
                if(operation.type == 'despesa'){
                    x = x - Number(operation.valor)
                
                }else{
                    x = x + Number(operation.valor)
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
                    <OperationContainer onPress={()=> navigateToDetails(item)}>
                        <PropertyContainer>
                            <OperationProperty>Valor: </OperationProperty>
                            <OperationValue type = {item.type}>
                                {item.type === 'despesa' ? '-' : '+'}
                                {item.valor}
                            </OperationValue>
                        </PropertyContainer>

                        <OperationButtomContainer>
                            <OperationButtom onPress={()=> handleDone(item)} value={'done'}>
                                {item.concluido === true ?
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