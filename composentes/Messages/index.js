import { View, Text } from 'react-native'
import React from 'react'
import Styles from './style'
/*import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);*/

const Messages = ({item}) => {
  return (
    <View style={Styles.container}>
      <Text>{item.user.message}hfhfhfhfhfh</Text>
      <Text>{item.user.createdAt}</Text>
    </View>
  )
}
export default Messages