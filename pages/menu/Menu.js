import { View, Text, Button } from "react-native";

import { useNavigation } from '@react-navigation/native';

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
        <View>
            <Text>Notificação</Text>
            <Button title="Ver candidaturas" onPress={()=>Pages('Candidatura')}/>
            <Button title="Ver empresas" onPress={()=>Pages('Empresas')}/>
            <Button title="Ver cargos" onPress={()=>Pages('Cargos')}/>
            <Button title="Ver perfil" onPress={()=>Pages('Perfil')}/>
            <Button title="Dashboard" onPress={()=>Pages('Dashboard')}/>
        </View>
    )
}