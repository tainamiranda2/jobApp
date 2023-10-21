import Global from '../../styles/Global';
import { ImageBackground,View, Text, TouchableOpacity, Modal, TextInput, FlatList,Button, SafeAreaView } from "react-native";
import React, { useState } from "react";
export default function Empresas (){
    const [isModalVisible, setIsModalVisible]=useState('')
    const [selectedRegiao, setSelectedRegiao] = useState(null);

    const regioes = ['Nordeste', 'Sul', 'Norte'];

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
    
      const renderItem = (item, onSelect) => (
        <TouchableOpacity onPress={() => onSelect(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      );
    
    return(
      <ImageBackground   source={require('../../fundo.png')}>
        <View style={Global.form}>
        <View style={Global.formInputs}>
            <Text style={Global.formText}>Empresa</Text>
            <TextInput style={Global.formInput} 
             placeholder='Nome'/>
             
            <TextInput  style={Global.formInput}
             placeholder='Descrição(Opcional)'/>
         
            <SafeAreaView>

        <Text>Regiões</Text>
        <TouchableOpacity onPress={() => openModal('empresa')}>
          <Text  style={Global.formSelect}>{ selectedRegiao || 'Selecione'}</Text>
        </TouchableOpacity>
      </SafeAreaView>


      <Modal transparent={true} animationType="slide" visible={isModalVisible === 'empresa'}>
        <View style={Global.formSelectModal}>
          <Text >Escolha uma região:</Text>
          <FlatList
            data={ regioes}
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
        onPress={() => {
          // Lógica a ser executada ao pressionar o botão
        }}
      >
        <Text style={Global.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
    )
}