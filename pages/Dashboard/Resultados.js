import { View,Text,ImageBackground, TouchableOpacity } from "react-native";
import { BarChart } from 'react-native-chart-kit';
import Global from '../../styles/Global';
import { FontAwesome } from "react-native-vector-icons";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Resultado (){
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99],
          },
        ],
      };
    
      const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
      };
      const navigation =useNavigation();

      const handleVoltarMenu = () => {
        navigation.goBack()
      };
    return(
      <ImageBackground source={require('../../fundo.png')}>

      <TouchableOpacity onPress={() => handleVoltarMenu()}>
    <FontAwesome name="arrow-left" size={30} color="white" />
    </TouchableOpacity>

        <View style={Global.form}>
            <Text>Resultado</Text>
                 
      <BarChart
        style={{ width: 300, height: 200 }}
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
      />
        </View>
<Text>Aprovada</Text>
<Text>Reprovada</Text>
<Text>Em análise</Text>

        </ImageBackground>
    )
}