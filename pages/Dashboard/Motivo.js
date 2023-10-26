import React from 'react';
import { View, Text,ImageBackground, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { FontAwesome } from "react-native-vector-icons";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Global from '../../styles/Global';


export default function Motivo() {
  const data = {
    labels: ['Experiência', 'Entrevista', 'Nível salarial', 'Modalidade'],
    datasets: [
      {
        data: [20, 45, 28, 80],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  //  strokeWidth: 2,
  };
  const navigation =useNavigation();

  const handleVoltarMenu = () => {
    navigation.goBack()
  };
  return (
    <ImageBackground source={require('../../fundo.png')}>
            <TouchableOpacity onPress={() => handleVoltarMenu()}>
    <FontAwesome name="arrow-left" size={30} color="white" />
    </TouchableOpacity>

    <View>  
        <Text>Motivo de recusa/fracasso</Text>
    <View 
    style={Global.form}
   // style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10 }}
    >
   
      <BarChart
            style={{ height: 200, width: 300 }}
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
        verticalLabelRotation={0} // Rotação dos rótulos no eixo vertical (0 graus)
        fromZero={true} // Começa a partir do zero no eixo vertical
     //   yAxisSuffix="%" // Sufixo para os valores no eixo vertical
        horizontalLabelRotation={0} // Rotação dos rótulos no eixo horizontal (0 graus)
      />
     </View>
    </View>
    </ImageBackground>
  );
}
