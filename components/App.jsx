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
    <WebView source={{ uri: 'https://nibaak.ir/' }} />
    // <SafeAreaView>
    //   <ScrollView>
    //     <View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  )
}

export default App