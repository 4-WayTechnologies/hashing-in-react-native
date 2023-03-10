import {  StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'
import React,{useState} from 'react'
import { JSHash, JSHmac, CONSTANTS } from "react-native-hash";
const HashToken = () => {
    const [text,setText]=useState()
    const [stringText,setString]=useState()
   const [secretKey,setSecretKey]=useState()
   const [hmac256,setHmac256]=useState(false)
  const sha256=()=>{
    setHmac256(false)
    JSHash(text, CONSTANTS.HashAlgorithms.sha256)
    .then(hash => 
    setString(hash))
    .catch(e => console.log(e));
  }
  const HmacSHA256=()=>{
    JSHmac(text, secretKey, CONSTANTS.HmacAlgorithms.HmacSHA256)
    .then(hash => setString(hash))
    .catch(e => console.log(e));
  }
  const MD5=()=>{
    setHmac256(false)
    JSHash(text, CONSTANTS.HashAlgorithms.md5)
    .then(b => setString(b))
    .catch(er => console.log(er))
  }
  const SHA_1=()=>{
    setHmac256(false)
    JSHash(text, CONSTANTS.HashAlgorithms.sha1)
    .then(b => setString(b))
    .catch(er => console.log(er))
  }
   
  return (
    <View>
  <TextInput value={text} onChangeText={(prev)=>setText(prev)} style={styles.textInput} placeholder='String....'/>
  {hmac256==true?<TextInput value={secretKey} onChangeText={(prev)=>setSecretKey(prev)} style={styles.textInput} placeholder='SecretKey....'/>:null}
<TouchableOpacity style={styles.hashMac} onPress={()=>sha256()}>
<Text style={styles.Text_header}>sha256</Text>
</TouchableOpacity>
{hmac256==true?<TouchableOpacity style={styles.hashMac}  onPress={()=>HmacSHA256()}>
<Text style={styles.Text_header}>HmacSHA256</Text>
</TouchableOpacity>:<TouchableOpacity style={styles.hashMac} onPress={()=>setHmac256(!hmac256)}>
<Text style={styles.Text_header}>HmacSHA256</Text>
</TouchableOpacity>}
<TouchableOpacity style={styles.hashMac} onPress={()=>MD5()}>
<Text style={styles.Text_header}>MD5</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.hashMac} onPress={()=>SHA_1()}>
<Text style={styles.Text_header}>SHA-1</Text>
</TouchableOpacity>
{stringText && <Text style={{color:'#000',marginTop:10}}>{stringText}</Text>}

    </View>
  )
}

export default HashToken

const styles = StyleSheet.create({
    textInput:{
        width:300,
        height:40,
        borderWidth:1,
        borderColor:'#000',alignSelf:'center',
        marginVertical:10,
        borderRadius:10
    },hashMac:{
        width:160,
        height:35,
        backgroundColor:'#CD5808',
        borderRadius:10,
        alignSelf:'center',
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center'
    },Text_header:{
        color:'#fff',
        fontSize:16
    }
})