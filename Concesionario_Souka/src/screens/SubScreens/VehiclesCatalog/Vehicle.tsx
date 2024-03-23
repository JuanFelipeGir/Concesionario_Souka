import React from 'react'
import { View,Text,Image, StyleSheet } from 'react-native'

const Vehicle = ({imageUrl,description,price}) => {
  return (
<View style={Style.container}>
    <Image
    style={Style.img}
    source={{uri:imageUrl,}}
    />
    <Text style={Style.title}>
        {description}
    </Text>
    <Text style={Style.price}>
        ${price}
    </Text>
</View>
  )
}

const Style =StyleSheet.create({
    img:{
        width:300,
        height:300
    },
    title:{
        fontSize:25,
        color:'white',
        textAlign:'center'
    },
    container:{
        justifyContent:"flex-start",
        backgroundColor:'ligth blue'
    },
    price:{
        fontSize:35
    }

})
export default Vehicle
