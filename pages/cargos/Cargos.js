import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Global from '../../styles/Global';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from "react-native-vector-icons";

export default function Cargos() {
  const [nomeCargo, setNomeCargo] = useState('');
  const [descricaoCargo, setDescricaoCargo] = useState('');

  const handleCadastroCargo = async () => {
    try {
      // Verifica se o campo nomeCargo foi preenchido
      if (!nomeCargo) {
        alert('Por favor, preencha o nome do cargo.');
        return;
      }

      // Chama a API para cadastrar o cargo
      const response = await axios.post('http://localhost/jobApp-api/cargo/add', {
        nome: nomeCargo,
        descricao: descricaoCargo
      });

      // Aqui você pode lidar com a resposta da API, se necessário
      console.log('Resposta da API:', response.data);

      // Limpa os campos após o cadastro
      setNomeCargo('');
      setDescricaoCargo('');

      alert('Cargo cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar cargo:', error);
      alert('Erro ao cadastrar cargo. Por favor, tente novamente.');
    }
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

      <View style={Global.form}>
        <View style={Global.formInputs}>

          <Text style={Global.formText}>Cargos</Text>

          <TextInput
            style={Global.formInput}
            placeholder='Nome'
            value={nomeCargo}
            onChangeText={(text) => setNomeCargo(text)}
          />

          <TextInput
            style={Global.formInput}
            placeholder='Descrição (Opcional)'
            value={descricaoCargo}
            onChangeText={(text) => setDescricaoCargo(text)}
          />

          <TouchableOpacity
            style={Global.ButtonForm}
            onPress={handleCadastroCargo}
          >
            <Text style={Global.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
