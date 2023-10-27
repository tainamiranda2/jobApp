import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { FontAwesome } from 'react-native-vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Global from '../../styles/Global';

export default function Motivo() {
  const [data, setData] = useState({
    labels: ['Experiência', 'Entrevista', 'Nível salarial', 'Modalidade'],
    datasets: [
      {
        data: [0, 0, 0, 0],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      },
    ],
  });

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
        let experiencia = 0;
        let entrevista = 0;
        let nivelSalarial = 0;
        let modalidade = 0;

        // Contar vagas por motivo
        vagas.forEach((vaga) => {
          const motivo = vaga.motivo;

          if (motivo === 'Experiência') {
            experiencia++;
          } else if (motivo === 'Entrevista') {
            entrevista++;
          } else if (motivo === 'Nível salarial') {
            nivelSalarial++;
          } else if (motivo === 'Modalidade') {
            modalidade++;
          }
        });

        // Atualizar os dados do gráfico
        setData((prevData) => ({
          labels: ['Experiência', 'Entrevista', 'Nível salarial', 'Modalidade'],
          datasets: [
            {
              data: [experiencia, entrevista, nivelSalarial, modalidade],
              color: prevData.datasets[0].color, // Manter a cor existente
            },
          ],
        }));
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
        <Text style={Global.formText}>Motivo de Recusa/Fracasso</Text>
        <BarChart
          style={{ height: 200, width: 300 }}
          data={data}
          width={300}
          height={200}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          fromZero={true}
          horizontalLabelRotation={0}
        />
      </View>
    </ImageBackground>
  );
}
