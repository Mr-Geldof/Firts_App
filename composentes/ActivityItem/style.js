import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constante";

const styles = StyleSheet.create({
    scrollBarList:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    scrollBarListItem: { 
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical:15,
        backgroundColor: 'white',
        marginRight:15,
        elevation:1,
        borderRadius:10,
        marginTop:20,
        marginLeft:10,
    }, 
    mainText:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    subText:{
        marginTop:10,
        fontSize:12, 
    },
    SvgImage:{
        width:60,
        height:60,
    }
})

export default styles;