import Global from '../../styles/Global';
import { ImageBackground, View, Text, TouchableOpacity, Modal, TextInput, FlatList, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";
import axios from 'axios';
import { FontAwesome } from "react-native-vector-icons";

export default function Empresas() {
  const [isModalVisible, setIsModalVisible] = useState('');
  const [selectedRegiao, setSelectedRegiao] = useState(null);
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [descricaoEmpresa, setDescricaoEmpresa] = useState('');

  const regioes = ['Nordeste', 'Norte', 'Centro-oeste', 'Sudeste', 'Sul'];

  const openModal = (modalName) => {
    switch (modalName) {
      case 'empresa':
        setSelectedRegiao(null);
        break;

      default:
        break;
    }
    setIsModalVisible(modalName);
  };

  const closeModal = () => {
    setIsModalVisible(null);
  };
  const handleCadastroEmpresa = async () => {
    try {
      // Verifica se todos os campos foram preenchidos
      if (!nomeEmpresa || !selectedRegiao) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Chama a API para cadastrar a empresa
      const response = await axios.post('http://localhost/jobApp-api/empresa/add',{
        nome: nomeEmpresa,
        descricao: descricaoEmpresa,
        regiao: selectedRegiao
      });

      // Aqui você pode lidar com a resposta da API, se necessário
      console.log('Resposta da API:', response.data);

      // Limpa os campos após o cadastro
      setNomeEmpresa('');
      setDescricaoEmpresa('');
      setSelectedRegiao(null);

      alert('Empresa cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar empresa:', error);
      alert('Erro ao cadastrar empresa. Por favor, tente novamente.');
    }
  };
  const renderItem = (item, onSelect) => (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

 

  return (
    <ImageBackground source={require('../../fundo.png')}>
          <FontAwesome
        style={Global.Notification}
        name="bell"
        size={30}
        color="white"
      />
      <View style={Global.form}>
      <Text style={Global.formText}>Empresa</Text>
        <View style={Global.formInputs}>
        
          <Text>Nome</Text>
          <TextInput
            style={Global.formInput}
            placeholder='Nome'
            value={nomeEmpresa}
            onChangeText={(text) => setNomeEmpresa(text)}
          />
        <Text>Descrição</Text>
          <TextInput
            style={Global.formInput}
            placeholder='Descrição (Opcional)'
            value={descricaoEmpresa}
            onChangeText={(text) => setDescricaoEmpresa(text)}
          />

          <SafeAreaView>
            <Text>Regiões</Text>
            <TouchableOpacity onPress={() => openModal('empresa')}>
              <Text style={Global.formSelect}>{selectedRegiao || 'Selecione'}</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <Modal transparent={true} animationType="slide" visible={isModalVisible === 'empresa'}>
            <View style={Global.formSelectModal}>
              <Text>Escolha uma região:</Text>
              <FlatList
                data={regioes}
                renderItem={({ item }) => renderItem(item, setSelectedRegiao)}
                keyExtractor={(item) => item}
              />
              <TouchableOpacity onPress={closeModal}>
                <Text>Fechar</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity
            style={Global.ButtonForm}
            onPress={handleCadastroEmpresa}
          >
            <Text style={Global.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
