import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constante";

const Styles = StyleSheet.create({
    item:{
        marginRight:5,
        width:135,
        flexDirection: "row",
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: "white",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    }, 
    itemImg:{
        width:30,
        height:30,
        marginRight:10,
    }
})

export default Styles;