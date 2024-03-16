import React from 'react'
import { ScrollView} from 'react-native'
import Vehiculo from './Vehicle'

const VehicleList = ({vehicles}) => {
  return (
    <ScrollView>
        {vehicles.map((vehicle)=>(
            <Vehiculo
                key={vehicle.id}
                imageUrl={vehicle.imageUrl}
                description={vehicle.description}
                price={vehicle.price}
            />
  ))}
    </ScrollView>
  )
}

export default VehicleList
