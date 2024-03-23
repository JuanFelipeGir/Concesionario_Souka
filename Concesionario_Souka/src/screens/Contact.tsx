import React from 'react'
import { View } from 'react-native'
<<<<<<< HEAD

const Contact = () => {
  return (
    <View>
      
    </View>
=======
import { PaperProvider, Text } from 'react-native-paper'

const Contact = () => {
  return (
    <PaperProvider>
      <View>
        <Text>Adress:</Text>
        <Text>Cr45 #80-50</Text>
        <Text>Cellphone:</Text>
        <Text>+57 1234567890</Text>
        <Text>Email</Text>
        <Text>ConsecionarioSouka@gmail.com</Text>
      </View>
    </PaperProvider>
>>>>>>> 77a1b35f290ec7b3a2c2f9111dc27465562cdbc2
  )
}

export default Contact
