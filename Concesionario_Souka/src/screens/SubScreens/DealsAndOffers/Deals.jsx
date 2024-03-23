import React from 'react'
import { View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'


const Deals = ({imageUrl,description}) => {
  return (
    <PaperProvider>
        <View>
            <Image
            source={{uri:imageUrl,}}/>
            <Text>
                {description}
            </Text>
        </View>
    </PaperProvider>
  )
}

export default Deals
