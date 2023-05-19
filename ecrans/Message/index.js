 import { View, Text,FlatList } from 'react-native'
 import React from 'react'
import FakeChats from '../../fakeData/fakeChat'
import MessageList from '../../composentes/MessageList'
import Styles from '../../composentes/MessageList/style'
 
 const Messages = ({navigation}) => {
   return (
     <FlatList 
     style={Styles.root}
     showsHorizontalScrollIndicator={false}
     data={FakeChats} keyExtractor={item => item.id}
     renderItem={({ item }) => {
      return <MessageList item={item} navigation={navigation}/>
    } }
     />
   )
 }
 
 export default Messages