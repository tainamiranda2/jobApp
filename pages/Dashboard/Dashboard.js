import { View, Text, TouchableOpacity, ImageBackground} from "react-native";
import { FontAwesome } from 'react-native-vector-icons';
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
    const handleVoltarMenu = () => {
        navigation.goBack();
      };
    return(
        <ImageBackground   source={require('../../fundo.png')}>
          
        <View>
        <FontAwesome style={Global.Notification} name="bell" size={30} color="white" />
        <Text>Dashboard</Text>
        <TouchableOpacity onPress={() => handleVoltarMenu()}>
        <FontAwesome name="arrow-left" size={30} color="white" />
      </TouchableOpacity>

            <View>

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
        </ImageBackground>
    )
}
