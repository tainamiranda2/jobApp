import { View,Text,TextInput, Button,ImageBackground } from "react-native";
import Global from '../../styles/Global';

export default function Cargos (){
    return(
        <ImageBackground   source={require('../../fundo.png')}>
        <View style={Global.form}>
        <View style={Global.formInputs}>

            <Text style={Global.formText}>Cargos</Text>

            <TextInput  
            tyle={Global.formInput}
            
            placeholder='Nome'/>
            
            <TextInput 
             style={Global.formInput}
             placeholder='Descrição(Opcional)'/>
           
            <Button title={"Cadastrar"} 
            //onPress={Menu}
            />
        </View>
        </View>
        </ImageBackground>
    )
}