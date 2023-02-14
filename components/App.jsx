import React , {useEffect} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import SplashScreen from "react-native-splash-screen";



function App() {

  // useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

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