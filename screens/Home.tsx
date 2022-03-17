import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

const Home: React.FC = () => {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <WebView
            source={{
              uri: 'http://localhost:3000',
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

export default Home
