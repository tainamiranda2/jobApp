import { View, Text, Button } from "react-native";

import { useNavigation } from '@react-navigation/native';
import Global from '../../styles/Global';

export default function Menu (){
    const navigation =useNavigation();

    function Pages(page){
        if(page=='Candidatura'){
            navigation.navigate('Candidatura')
        }else if(page=='Cargos'){
            navigation.navigate('Cargos')
        }else if(page=='Empresas'){
            navigation.navigate('Empresas')
        }else if(page=='Perfil'){
            navigation.navigate('Perfil')
        } else{
            navigation.navigate('Dashboard')
        }
       
    }

    return(
        <View style={Global.container} >
            <Text>Notificação</Text>
            <Text style={Global.Card} 
            //title="Ver candidaturas" 
            //onPress={()=>Pages('Candidatura')}
            >Ver candidaturas</Text>
            <Text style={Global.Card} 
            //title="Ver empresas"
           // onPress={()=>Pages('Empresas')}
             >Ver empresas</Text>
            <Text 
             style={Global.Card} 
           // title="Ver cargos"
            // onPress={()=>Pages('Cargos')}
             >Ver cargos</Text>
            <Text  style={Global.Card} 
            //title="Ver perfil" 
          //  onPress={()=>Pages('Perfil')}
          >Ver perfil</Text>
            <Text style={Global.Card} 
            //title="Dashboard"
           //  onPress={()=>Pages('Dashboard')}
           >Dashboard</Text>
        </View>
    )
}