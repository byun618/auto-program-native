import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Main from './screens/Main'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}
      >
        <Main />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
