import React from 'react'
import WebView from 'react-native-webview'

const Main: React.FC = () => {
  return (
    <>
      <WebView
        source={{
          uri: 'http://192.168.35.237:3000',
        }}
      />
    </>
  )
}

export default Main
