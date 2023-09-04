import { View, Text } from "react-native";
import { Button } from "react-native-web";

export default function Menu (){
    return(
        <View>
            <Text>Notificação</Text>
            <Button title="Ver candidaturas"/>
            <Button title="Ver empresas"/>
            <Button title="Ver cargos"/>
            <Button title=" Ver perfil"/>
        </View>
    )
}