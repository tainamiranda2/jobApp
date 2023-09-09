import {  Text, View, Button, TextInput } from 'react-native';

export default function Empresas (){
    return(
        <View>
            <Text>Empresas</Text>
            <TextInput  value={"Nome"} placeholder='Nome'/>
            <TextInput value={"Região"}  placeholder='Região'/>
            <Button title={"Cadastrar"}
            // onPress={Menu}
             />
        </View>
    )
}