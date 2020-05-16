import styled from 'styled-components/native'

export const Welcome = styled.Text`
    position: absolute;
    width: 139px;
    height: 33px;
    left: 40px;
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
    height: 354px;
    top: 159px;

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
    font-size: 18px;
    line-height: 21px;

    color: #000000;
`

export const PasswordInput = styled.Text`
    margin-top: 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
`
export const InputArea = styled.TextInput`
    margin-top: 4px;

    border: 2px solid #E5E5E5;
    border-radius: 8px;
    max-width: 240px;
`

export const LoginButton = styled.TouchableOpacity`
    
    margin-top: 90px;

    background: #7a98F5;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 240px;
    border-radius: 8px;
`

export const LoginButtonText = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;
`

export const SignUpButton = styled.TouchableOpacity`
    margin-top: 280px;
    bottom: 30px;


    align-items: center;
    justify-content: center;
`

export const SignUpText = styled.Text`

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

`