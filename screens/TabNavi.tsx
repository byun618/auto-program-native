import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from './Home'
import Setting from './Setting'

const Tab = createBottomTabNavigator()

const TabNavi = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </>
  )
}

export default TabNavi
