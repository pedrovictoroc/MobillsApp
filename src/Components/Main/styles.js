import styled from 'styled-components/native'

export const MoneyHeader = styled.View`
    width: ${props => props.width}px;
    height: 80px;
    
    border-radius: 8px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export const HeaderText = styled.Text`
    font-size: 30px;
    color: #737380;
`

export const HeaderTextBold = styled.Text`
    color: ${props => props.totalValue >= 0 ? '#65BCBF' : '#F8777D'};
    font-weight: bold;
`

export const NewTransactionButton = styled.TouchableOpacity`
    margin-bottom: 20px;
    margin-top: 20px;
    
    width: ${props => props.width}px;
    height: 60px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #7a98F5;
`

export const NewTransactionText = styled.Text`
    font-size: 30px;
    color: #FFFFFF;
`

export const OperationsList = styled.FlatList`
    margin-top: 20px;
` 

export const OperationContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
    border-radius: 8px;
    background-color: #FFFFFF;
    margin-bottom: 16px;
`

export const PropertyContainer = styled.View`
    flex-direction: column;
    padding-bottom: 5px;
`

export const OperationProperty = styled.Text`
    font-size: 14px;
    color: #41414d;
    font-weight: bold;
`

export const OperationValue = styled.Text`
    font-size: 20px;
    color: ${props => props.type === 'despesa'? '#F8777D' : '#65BCBF'};
`

export const OperationButtomContainer = styled.TouchableOpacity`
    justify-content:flex-end;
`

export const OperationButtom = styled.Text`
    font-size: 20px;
`