import styled from 'styled-components/native'

export const SignUpMessage = styled.Text`
    width: 235px;
    height: 33px;
    top: 62px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;

    color: #000000;
`

export const Card = styled.View`
    width: 320px;
    height: 520px;
    margin-top: 30px;

    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
`

export const InputBlock = styled.View`
    width: 280px;
    height: 176px;
    left: 20px;
    top: 48px;
    align-content: flex-start;
`

export const UserInput = styled.Text`
    margin-top: 15px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 21px;

    color: #000000;
`

export const DataInput = styled.Text`
    margin-top: 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 21px;

    color: #000000;
`

export const DataPicker = styled.Picker`
    margin-top: 4px;

    border: 2px solid #E5E5E5;
    border-radius: 8px;
    max-width: 240px;
`
export const InputArea = styled.Text`
    margin-top: 15px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 21px;

    max-width: 240px;
    height: 40px;
`

export const SignUpButton = styled.TouchableOpacity`
    
    margin-top: 190px;

    background: #7a98F5;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 240px;
    border-radius: 8px;
`

export const SignUpButtonText = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;
`

export const ButtonSection = styled.View`
    margin-top: 20px;
    flex-direction: row;

    justify-content: space-between;
`

export const GoBackButton = styled.TouchableOpacity`
    
    background: #7a98F5;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
    border-radius: 8px;
`

export const GoBackText = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;
`

export const DateTrigger = styled.TouchableOpacity`
    height: 40px;
    width: 240px;
    border-radius: 8px; 

    border: 2px solid #E5E5E5;

    justify-content: flex-start;
    align-content: center;
`

export const DateTriggerText = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
`