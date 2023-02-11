import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ color:'red' , textAlign:'center' , fontWeight:'bold' }}>
            React native
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App