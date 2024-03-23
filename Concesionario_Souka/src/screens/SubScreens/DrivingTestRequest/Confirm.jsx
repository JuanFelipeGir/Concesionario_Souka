import React from 'react'
import { View } from 'react-native'
import { PaperProvider, Text, TextInput } from 'react-native-paper'

const Confirm = () => {
  return (
    <PaperProvider>
        <View>
            <Text>Car</Text>
            <Text>Date</Text>
            <Text>Name</Text>
            <Text>Surname</Text>
            <Text>DNI</Text>
            <Text>Cellphone </Text>



        </View>
    </PaperProvider>
  )
}

export default Confirm
