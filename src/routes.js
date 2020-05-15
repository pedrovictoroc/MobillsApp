import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './Components/Login/Login'

const Routes = createAppContainer(
    createStackNavigator({
        Login
    },{
        defaultNavigationOptions:{
            headerShown: false
        }
    })
)

export default Routes