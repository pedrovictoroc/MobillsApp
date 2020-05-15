import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Auth from './Components/Auth/auth'

const Routes = createAppContainer(
    createStackNavigator({
        Auth
    },{
        defaultNavigationOptions:{
            headerTitleAlign: 'center',
            headerStyle:{
                backgroundColor: '#f5f5f5'
            }
        }
    })
)

export default Routes