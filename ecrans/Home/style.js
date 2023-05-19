import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constante";

const dashbordStyles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
    },
    userImage:{
        width:100,
        height:100,
        borderRadius:100 / 2,
    },
    UserName: {
        fontSize: 16,
    },
    title: {
        paddingHorizontal:PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    title_space_between:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginTop:15,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    titleBold:{
        fontWeight: "bold"
    }, 
    link:{
        color:COLORS.main,
    }, 
    doctorsContainer:{
        marginTop: -20,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    doctorImg:{
        width:80,
        height:80,
        borderRadius:80 / 2,
    },
    doctorCard:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'white',
        elevation: 5,
        padding:15,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginBottom:20,
        borderRadius:5,
    }, 
    doctorInfo:{
        flexDirection:'column',
    },
    doctorName:{ 
        fontWeight: 'bold',
        fontSize:16,
        marginLeft:20,
        marginBottom:15,
    },
    doctorSpec:{
        marginLeft:20,
        backgroundColor: COLORS.main,
        borderRadius:10,
        padding:8,
        paddingHorizontal:PADDING.horizontal,
        fontSize:14,
        color:'white',
    }
})

export default dashbordStyles;