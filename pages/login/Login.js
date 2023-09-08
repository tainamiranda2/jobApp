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
            <Text >Loin</Text>
            <TextInput  value={"Email"} placeholder='Email'/>
            <TextInput value={"Senha"}  placeholder='Email'/>
            <Button title={"Log in"} onPress={Menu}/>
        </View>
    )
}

