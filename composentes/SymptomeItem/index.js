import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tete from '../../../mobileApp/asset/allo.jpg'
import Styles from './style'

const SymptomeItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={Styles.item}>
        <Image style={Styles.itemImg} source={tete}/>
        <Text>{item.libelele}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SymptomeItem