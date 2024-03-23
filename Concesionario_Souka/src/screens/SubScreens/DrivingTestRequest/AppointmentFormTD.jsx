import React, { useState } from 'react'
import { View } from 'react-native'
import { PaperProvider, Text, TextInput } from 'react-native-paper'

const AppointmentFormTD = (navigation) => {
  const [Car, setCar]=useState('');
  const [Date, setDate]=useState('');
  const [Name, setName]=useState('');
  const [Surname, setSurname]=useState('');
  const [DNI, setDNI]=useState(int);
  const [Cellphone, setCellphone]=useState(int);

  const handleSubmit=()=>{
    console.log('Car',Car);
    console.log('Date',Date);
    console.log('Name',Name);
    console.log('Surname',Surname);
    console.log('DNI',DNI);
    console.log('Cellphone',Cellphone);

    navigation.navigate('Confirm', {Car:Car,Date:Date,Name:Name,Surname:Surname,DNI:DNI,Cellphone:Cellphone})
  }

  return (
    <PaperProvider>
        <View>
            <Text>Car</Text>
            <TextInput/>
            <Text>Date</Text>
            <TextInput/>
            <Text>Name</Text>
            <TextInput/>
            <Text>Surname</Text>
            <TextInput/>
            <Text>DNI</Text>
            <TextInput/>
            <Text>Cellphone</Text>
            <TextInput/>
        </View>
    </PaperProvider>
  )
}

export default AppointmentFormTD
