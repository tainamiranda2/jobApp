import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { FontAwesome } from 'react-native-vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Global from '../../styles/Global';

export default function Regioes() {
  const [data, setData] = useState([]);

 
  const navigation = useNavigation();

  const handleVoltarMenu = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obter a lista de vagas
        const responseVagas = await axios.get('http://localhost/jobApp-api/vaga');
        const vagas = responseVagas.data;

        // Mapear empresas únicas
        const empresasIds = [...new Set(vagas.map((vaga) => vaga.empresa_id))];
    

const coresFixas = ['#0000FF', '#FF0000', '#fff', '#FFFF00', '#008000']; // Cores fixas para cada região

const empresasData = await Promise.all(
  empresasIds.map(async (empresaId, index) => {
    try {
      // Obter informações da empresa
      const responseEmpresa = await axios.get(`http://localhost/jobApp-api/empresa/view/${empresaId}`);
      const empresa = responseEmpresa.data;

      // Verificar se a empresa foi encontrada
      if (!empresa) {
        console.error(`Empresa não encontrada para o ID ${empresaId}`);
        return null;
      }

      // Obter a região da empresa
      const regiaoEmpresa = empresa[0].regiao;

      // Obter as vagas da empresa
      const vagasEmpresa = vagas.filter((vaga) => vaga.empresa_id === empresaId);

      // Contar as vagas por região
      const regioesCount = vagasEmpresa.reduce((count, vaga) => {
        count[regiaoEmpresa] = (count[regiaoEmpresa] || 0) + 1;
        return count;
      }, {});

      // Calcular o total de vagas da empresa
      const totalVagas = vagasEmpresa.length;

      // Criar dados para cada região
      const regioesData = Object.entries(regioesCount).map(([name, population]) => ({
        name,
        population,
        percentage: (population / totalVagas) * 100,
        color: coresFixas[index % coresFixas.length], // Usar cores fixas
        legendFontColor: '#fff',
        legendFontSize: 15,
        key: `${empresaId}-${name}`,
      }));

      return {
        empresa,
        regioesData,
      };
    } catch (error) {
      console.error(`Erro ao obter dados da empresa ${empresaId}:`, error.message);
      return null;
    }
  })
);

// Filtrar empresas que foram obtidas com sucesso
const empresasComSucesso = empresasData.filter((item) => item !== null);

// Atualizar o estado do componente com os dados
setData(empresasComSucesso.flatMap(({ regioesData }) => regioesData));

setData(empresasComSucesso.flatMap(({ regioesData }) => regioesData));


      } catch (error) {
        console.error('Erro ao obter dados da API:', error.message);
      }
    };

    fetchData();
  }, []); // A dependência vazia garante que o efeito seja executado apenas uma vez
  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(8, 9, 6, ${opacity})`,
  };
  return (
    <ImageBackground source={require('../../fundo.png')}>
      <TouchableOpacity onPress={handleVoltarMenu}>
        <FontAwesome name="arrow-left" size={30} color="white" />
      </TouchableOpacity>

      <View style={Global.form}>
        <Text>Regiões de envio por empresa</Text>
        <PieChart data={data} width={300}
         height={200} 
       
        chartConfig={chartConfig}
          accessor="population" absolute />
      </View>
    </ImageBackground>
  );
}
