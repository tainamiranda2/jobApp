import React from 'react';
import { View, Text,ImageBackground, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { FontAwesome } from "react-native-vector-icons";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Global from '../../styles/Global';

export default function Regioes() {
  const data = [
    {
      name: "Centro-oeste",
      population: 21500000,
      color: "#FFFF00",
      legendFontColor: "#fff",
      legendFontSize: 15
    },
    {
      name: "Nodeste",
      population: 2800000,
      color: "#00BFFF",
      legendFontColor: "#fff",
      legendFontSize: 15
    },
    {
      name: "Norte",
      population: 527612,
      color: "#000",
      legendFontColor: "#fff",
      legendFontSize: 15
    },
    {
      name: "Sudeste",
      population: 8538000,
      color: "#FF0000",
      legendFontColor: "#fff",
      legendFontSize: 15
    },
    {
      name: "Sul",
      population: 11920000,
      color: "#008000",
      legendFontColor: "#fff",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: '#fff', // Fundo branco
    backgroundGradientTo: '#fff', // Fundo branco
  color: (opacity = 1) => ` ${opacity})`, // Cor preta para o gráfico
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

    <View
    style={Global.form}
    // style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}
     >
      <Text>Regiões de envio</Text>
      <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
        accessor="population"
      
        paddingLeft="15"
        absolute
      />
    </View>
    </ImageBackground>
  );
}
