import React, { useState } from 'react'

import { View, Picker } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import DateTimePicker from '@react-native-community/datetimepicker'

import firestore from '@react-native-firebase/firestore'

import CalendarIcon from 'react-native-vector-icons/FontAwesome'

import { Card, 
         InputBlock, 
         UserInput, 
         DataInput,
         DataPicker, 
         InputArea, 
         GoBackButton, 
         GoBackText,
         ButtonSection} from './styles'

export default function NewOperation(){

    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)

    const [selectedType, setSelectedType] = useState('despesa')
    const [selectedPayment, setSelectedPayment] = useState(true)


    const navigator = useNavigation()

    function navigateToMain(){
        navigator.goBack()
    }

    const switchDate = (event, selectedDate) =>{
        setDate(selectedDate)
        setShow(false)
    }

    async function createOperation(){
        if(value === "" || description === ""){
            alert('Preencha todos os campos')
            return ;
        }


        const res = await firestore().collection('Usuarios').doc('wMWMt47Fl3SWBq3Hwyps').collection('Operacoes').add({valor: value, 
                                descricao: description,
                                data: date,
                                type: selectedType,
                                concluido: selectedPayment,
                                ID: new Date().getTime()
                            })
    
        navigateToMain()        
        
    }

    return (
        <View style={{alignItems:"center", flex: 1}}>
            <Card>
                <InputBlock>
                    <UserInput>Valor</UserInput>
                    <InputArea keyboardType={'numeric'} value={value} onChangeText= {(inputUser) => { setValue(inputUser) }}/>
                    <DataInput>Descrição</DataInput>
                    <InputArea value={description} onChangeText= {(inputUser) => { setDescription(inputUser) }}/>
                    <DataInput>Data</DataInput>
                    
                    <CalendarIcon onPress={() => setShow(true)} 
                                  name='calendar'
                                  size={20}
                                  style={{paddingTop: 5}}/>
                    
                    {show && <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        display="default"
                        onChange={switchDate}
                    />}
                    <DataInput>Tipo</DataInput>
                    <DataPicker
                        selectedValue={selectedType}
                        onValueChange={(itemValue)=>setSelectedType(itemValue)}
                    >
                        <Picker.Item label="despesa" value="despesa"/>
                        <Picker.Item label="receita" value="receita"/>
                    </DataPicker>
                    <DataInput>Pagamento</DataInput>
                    <DataPicker
                        selectedValue={selectedPayment}
                        onValueChange={(itemValue)=>{setSelectedPayment(itemValue)}}
                    >
                        <Picker.Item label="pago" value="true"/>
                        <Picker.Item label="não pago" value="false"/>
                    </DataPicker>
                </InputBlock>
            </Card>

            <ButtonSection>
                <GoBackButton onPress={() => createOperation()}>
                    <GoBackText>Concluir</GoBackText>
                </GoBackButton>

                <GoBackButton onPress={() => navigateToMain()} style={{marginLeft: 20}}>
                    <GoBackText>Voltar</GoBackText>
                </GoBackButton>
            </ButtonSection>
            
        </View>
    )
}