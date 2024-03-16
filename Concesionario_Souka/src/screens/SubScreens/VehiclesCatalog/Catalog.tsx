import React from 'react'
import VehiculoList from './VehicleList'

const Catalog = () => {
  const vehicles = [
    {
        id:1,
        imageUrl:'data:image/jpeg;base64,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',
        description:'Un carro rrarro',
        price:25000
    },
    {
        id:2,
        imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Fcarro&psig=AOvVaw1f2P2-haFFJ2dC9hStE4pi&ust=1710077692305000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjioP2l54QDFQAAAAAdAAAAABAE',
        description:'Un carro rrarro',
        price:25000   
    },
    {
        id:3,
        imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Fcarro&psig=AOvVaw1f2P2-haFFJ2dC9hStE4pi&ust=1710077692305000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjioP2l54QDFQAAAAAdAAAAABAE',
        description:'Un carro rrarro',
        price:25000   
    }
];
  return <VehiculoList vehicles={vehicles}/>;
};

export default Catalog