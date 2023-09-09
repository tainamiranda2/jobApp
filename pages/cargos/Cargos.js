import { View,Text,TextInput, Button } from "react-native";

export default function Cargos (){
    return(
        <View>
            <Text>Cargos</Text>
            <TextInput  value={"Nome"} placeholder='Nome'/>
           
            <Button title={"Cadastrar"} 
            //onPress={Menu}
            />
        </View>
    )
}