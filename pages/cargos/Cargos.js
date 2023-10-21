import { View,Text,TextInput, TouchableOpacity,ImageBackground } from "react-native";
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
           
           <TouchableOpacity
        style={Global.ButtonForm}
        onPress={() => {
          // Lógica a ser executada ao pressionar o botão
        }}
      >
        <Text style={Global.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
    )
}