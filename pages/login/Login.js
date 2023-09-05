import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//import ButtonL from '../../components/ButtonL';


export default function Login (){
const navigation =useNavigation();

    function Menu(){
        navigation.navigate('Menu')
    }
    return(
        <View>
            <Text>JobApp</Text>
            <Text style={estilos.textoLogin}>Loin</Text>
            <TextInput style={estilos.texto} value={"Email"} placeholder='Email'/>
            <TextInput style={estilos.texto} value={"Senha"}  placeholder='Email'/>
            <Button title={"Log in"} onPress={Menu}/>
        </View>
    )
}

const estilos= StyleSheet.create({
    texto:{
        margin:'10px',
        color:'#D3D3D3',
        fontSize:14,
        textAlign:'center',
        
    },
    textoLogin:{
        color:'#00FF00',
        fontSize:20,
        textAlign:'center'
        

    }
})