import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

const Setting: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: 'white' }} />
      <WebView
        source={{
          uri: 'https://www.naver.com/',
        }}
      />
    </SafeAreaProvider>
  )
}

export default Setting
