import { View, FlatList, Text } from 'react-native'
import React, { useEffect } from 'react'
import fakeConversation from '../../fakeData/fakeConversations';
import Messages from '../../composentes/Messages';

const MessageDetails= ({route, navigation }) => {
  const {item} = route.params;
  useEffect(()=>{
    navigation.setOptions({title:item.fullname})
  })
  return (
    <View>
      <FlatList data={fakeConversation} keyExtractor={item => item.id}
      renderItem={({item }) =>{
        return <Messages item={item}/>
      }}
      />
    </View>
  )
}

export default MessageDetails