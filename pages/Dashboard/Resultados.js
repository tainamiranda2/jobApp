import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { FontAwesome } from 'react-native-vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Global from '../../styles/Global';

export default function Resultado() {
  const [data, setData] = useState({
    labels: ['Aprovada', 'Em Análise', 'Reprovada'],
    datasets: [
      {
        data: [0, 0, 0],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Aprovada (verde)
      },
      {
        data: [0, 0, 0],
        color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`, // Em Análise (amarelo)
      },
      {
        data: [0, 0, 0],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Reprovada (vermelho)
      },
    ],
  });

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  const navigation = useNavigation();

  const handleVoltarMenu = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua a URL pela sua API endpoint
        const response = await axios.get('http://localhost/jobApp-api/vaga');

        // Extrair dados da resposta da API
        const vagas = response.data;

        // Inicializar contadores
        let aprovadas = 0;
        let emAnalise = 0;
        let reprovadas = 0;

        // Contar vagas por status
        vagas.forEach((vaga) => {
          const status = vaga.status;

          if (status === 'Aprovada') {
            aprovadas++;
          } else if (status === 'Em_analise') {
            emAnalise++;
          } else if (status === 'Reprovada') {
            reprovadas++;
          }
        });

        // Atualizar os dados do gráfico
        setData({
          labels: ['Aprovada', 'Em Análise', 'Reprovada'],
          datasets: [
            {
              data: [aprovadas, emAnalise, reprovadas],
            },
          ],
        });
      } catch (error) {
        console.error('Erro ao obter dados da API:', error.message);
      }
    };

    // Chamar a função de busca de dados
    fetchData();
  }, []); // A dependência vazia garante que o efeito seja executado apenas uma vez


  return (
    <ImageBackground source={require('../../fundo.png')}>
  <View style={Global.Conjunto}>
  
  <TouchableOpacity onPress={() => handleVoltarMenu()}>
  <FontAwesome  name="arrow-left" size={30} color="white"/>

</TouchableOpacity>
<FontAwesome style={Global.Notification} name="bell" size={30} color="white" />
 </View>

      <View style={Global.form}>
        <Text style={Global.formText}>Resultados</Text>
        <BarChart style={{ width: 300, height: 200 }} data={data} width={300} height={200} chartConfig={chartConfig} 
            fromZero={true}/>
    <View style={Global.GraficosStaus}>
      <Text style={{backgroundColor: 'green', padding: 10, margin: 5, color:"#fff",}}>Aprovada</Text>
      <Text style={{backgroundColor: 'red', padding: 10, color:"#fff",  margin: 5, }}>Reprovada</Text>
      <Text style={{backgroundColor: 'yellow', padding: 10, color:"#fff", margin: 5, }}>Em análise</Text>
      </View>
      </View>
    </ImageBackground>
  );
}
