import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from './screens/Home'
import Setting from './screens/Setting'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
