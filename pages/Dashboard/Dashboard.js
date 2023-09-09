import { View,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Global from '../../styles/Global';

export default function Dashboard (){
    const navigation = useNavigation();

    function Pages(page) {
        if (page == 'Regioes') {
            navigation.navigate('Regioes')
        } else if (page == 'Respostas') {
            navigation.navigate('Respostas')
        } else if (page == 'Motivos') {
            navigation.navigate('Motivos')
        } else {
            navigation.navigate('Resultados')
        }
    }
    return(
        <View>
            <Text>Dashboard</Text>
            <View style={Global.container} >
            <TouchableOpacity onPress={() => Pages('Regioes')}>
                <Text style={Global.Card}>Regiões</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Pages('Respostas')}>
                <Text style={Global. CardR}>Respostas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Pages('Motivos')}>
                <Text style={Global.Card}>Motivos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Pages('Resultados')}>
                <Text style={Global. CardR}>Resultados</Text>
            </TouchableOpacity>
           
          </View>
        </View>
    )
}
