import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';



function App() {
  return (
    <SafeAreaView style={iframe.responsive}>
      <WebView source={{ uri: 'https://ginocode.ir' }}
       allowFileAccess={true}
       scalesPageToFit={true}
       originWhitelist={['*']}
      />
    </SafeAreaView>
  )
}

const iframe = StyleSheet.create({
  responsive : {
    flex:1,
  }
})

export default App