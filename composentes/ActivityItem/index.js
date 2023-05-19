import { Text,TouchableOpacity, Image} from 'react-native'
import React from 'react'
//import img1 from '../../asset/img1.png'
import styles from './style'

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollBarListItem}>
            <Image style={styles.SvgImage} source={require("../../asset/img1.png")}/>
            <Text style={styles.mainText}>{item.mainText}</Text>
            <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  )
}
export default ActivityItem