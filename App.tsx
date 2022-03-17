// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from './screens/Home'

// const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <>
      <Home />
      {/* <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </>
  )
}

export default App
