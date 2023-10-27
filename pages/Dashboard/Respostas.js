import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { FontAwesome } from 'react-native-vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Global from '../../styles/Global';

export default function Respostas() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  const navigation = useNavigation();

  const handleVoltarMenu = () => {
    navigation.goBack();
  };

  useEffect(() => {
    // Função para obter dados da API
    const fetchData = async () => {
      try {
        // Substitua a URL pela sua API endpoint
        const responseVagas = await axios.get('http://localhost/jobApp-api/vaga');
        
        // Extrair dados da resposta da API de vagas
        const vagas = responseVagas.data;
      //  console.log( vagas )
        // Obter IDs únicos das empresas das vagas
        const empresaIds = [...new Set(vagas.map((vaga) => vaga.empresa_id))];
        // Array para armazenar os nomes das empresas
        const empresaNomes = [];

        // Consulta para obter os nomes das empresas
        for (const empresaId of empresaIds) {
          const idNumerico = parseInt(empresaId, 10); // Converter a string para número
    const responseEmpresa = await axios.get(`http://localhost/jobApp-api/empresa/view/${idNumerico}`);
    const empresa = responseEmpresa.data;

    empresaNomes.push(empresa[0].nome);
    //console.log( empresa[0].nome);
        }

        // Criar os arrays de labels e dados para o gráfico
        const labels = empresaNomes;
        const dados = empresaIds.map((empresaId) => {
          // Contar a quantidade de candidaturas para cada empresa
          return vagas.filter((vaga) => vaga.empresa_id === empresaId).length;
        });
//console.log(dados)
        // Atualizar o estado do componente com os novos dados
        setData({
          labels: labels,
          datasets: [
            {
              data: dados,
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
              strokeWidth: 2,
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
        <Text style={Global.formText}>Empresas com respostas mais rápidas por mes</Text>
        <LineChart
          data={data}
          width={300}
          height={200}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          }}
        />
      </View>
    </ImageBackground>
  );
}
