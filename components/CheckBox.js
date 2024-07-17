import { Text, SafeAreaView, StyleSheet,View,TouchableOpacity } from 'react-native';
export default CheckBox = (props)=>{
  return(
     <View style = {{flexDirection:'row',justifyContent:'space-between',padding:6,borderTopWidth:props.topBorder&&1,borderBottomWidth:1}}>
    <Text style ={{fontFamily:'cursive'}}>
    {props.title}
    </Text>
    <TouchableOpacity 
    style = {{
        height:20,
        width:20,
        borderWidth:1,
        borderRadius:4,
        borderColor:'grey'
      }}
      onPress = {()=>{props.onPress()}}
    >
    {props.value&&<Text style={{alignSelf:'center',color:'green',}}>✓</Text>}
     
      </TouchableOpacity>
      
      </View>
  )
}