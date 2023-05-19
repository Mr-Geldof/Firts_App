import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

const MessageList = ({item,navigation}) => {
  return (
    <TouchableOpacity style={Styles.messageContainer} onPress={() => navigation.navigate("MessageDetails", {item})}>
        <Image style={Styles.messageImg} 
        source={{uri: 'https://media.istockphoto.com/id/1201657177/fr/photo/docteur-f%C3%A9minin-noir-de-sourire-dans-le-manteau-blanc-posant-avec-les-bras-pli%C3%A9s.jpg?s=612x612&w=0&k=20&c=mUvE7ofddrE8MaNG863CAVMAaJqQQBApCpjctIM3b10='}}
        />
        <View style={Styles.messageInfo}>
        <View style={Styles.date_name}>
            <Text style={Styles.name}>{item.fullname}</Text>
            <Text>{dayjs(item.date).fromNow(true)}</Text>
        </View>
            <Text>{item.last_message}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default MessageList