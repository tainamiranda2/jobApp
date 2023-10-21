import { useNavigation } from '@react-navigation/native';
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Global from '../../styles/Global';
//import ButtonL from '../../components/ButtonL';


export default function Login (){
const navigation =useNavigation();

   /* function Menu(){
        navigation.navigate('Menu')
    }*/

   ;
    return(
        <ImageBackground   source={require('../../fundo.png')}>
         <Text  style={Global.texto} >JobApp</Text>
        <View style={Global.form}>
        <View style={Global.formInputs}>
            <Text style={Global.formText}>Login</Text>
            <TextInput  style={Global.formInput}   placeholder='Email'/>
            <TextInput  style={Global.formInput} placeholder='Email'/>
            
         <TouchableOpacity
        style={Global.ButtonForm}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={Global.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
    )
}

