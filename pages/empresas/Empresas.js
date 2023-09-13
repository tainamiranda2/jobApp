import Global from '../../styles/Global';
import { View, Text, TouchableOpacity, Modal, TextInput, FlatList,Button, SafeAreaView } from "react-native";
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
        <View>
            <Text>Empresa</Text>
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

            <Button title={"Cadastrar"}
            style={Global.formButton}
           
             />
        </View>
    )
}