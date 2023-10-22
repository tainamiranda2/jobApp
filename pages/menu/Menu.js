import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Global from '../../styles/Global';
import { FontAwesome } from 'react-native-vector-icons';
export default function Menu() {
    const navigation = useNavigation();

    function Pages(page) {
        if (page == 'Candidatura') {
            navigation.navigate('Candidatura')
        } else if (page == 'Cargos') {
            navigation.navigate('Cargos')
        } else if (page == 'Empresas') {
            navigation.navigate('Empresas')
        } else if (page == 'Perfil') {
            navigation.navigate('Perfil')
        } else {
            navigation.navigate('Dashboard')
        }
    }

    return (
        <ImageBackground   source={require('../../fundo.png')}>
      
        <View>
       
       <FontAwesome style={Global.Notification} name="bell" size={30} color="white" />
       <FontAwesome  name="arrow-left" size={30} color="white" />

            <TouchableOpacity onPress={() => Pages('Candidatura')}>
                <Text style={Global.Card}>Ver candidaturas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Pages('Empresas')}>
                <Text style={Global. CardR}>Ver empresas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Pages('Cargos')}>
                <Text style={Global.Card}>Ver cargos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Pages('Perfil')}>
                <Text style={Global. CardR}>Ver perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Pages('Dashboard')}>
                <Text style={Global.Card}>Dashboard</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}
