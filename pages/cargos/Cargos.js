import { View,Text,TextInput, Button } from "react-native";
import Global from '../../styles/Global';

export default function Cargos (){
    return(
        <View>
            <Text>Cargos</Text>
            <TextInput  tyle={Global.formInput}
            
            placeholder='Nome'/>
            
            <TextInput  style={Global.formInput}
             placeholder='Descrição(Opcional)'/>
           
            <Button title={"Cadastrar"} 
            //onPress={Menu}
            />
        </View>
    )
}