import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Modal, FlatList,Button, SafeAreaView } from "react-native";

import Global from '../../styles/Global';
export default function Candidatura() {
  const [isModalVisible, setIsModalVisible]=useState('')
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const empresas = ['Empresa A', 'Empresa B', 'Empresa C'];
  const cargos = ['Cargo 1', 'Cargo 2', 'Cargo 3'];
  const datas = ['Data 1', 'Data 2', 'Data 3'];

  const openModal = (modalName) => {
    switch (modalName) {
      case 'empresa':
        setSelectedCargo(null);
        setSelectedData(null);
        setSelectedEmpresa(null);
        break;
      case 'cargo':
        setSelectedEmpresa(null);
        setSelectedData(null);
        break;
      case 'data':
        setSelectedEmpresa(null);
        setSelectedCargo(null);
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

  return (
    <ImageBackground   source={require('../../fundo.png')}>

    <View style={Global.form}>
      <Text  style={Global.formText}>Cadastre uma vaga</Text>

<View style={Global.formInputs}>
      <SafeAreaView >
        <Text>Empresa</Text>
        <TouchableOpacity onPress={() => openModal('empresa')}>
          <Text  style={Global.formSelect}>{selectedEmpresa || 'Selecione'}</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView>
        <Text>Cargo</Text>
        <TouchableOpacity onPress={() => openModal('cargo')}>
          <Text style={Global.formSelect}>{selectedCargo || 'Selecione'}</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView>
        <Text>Data</Text>
        <TouchableOpacity onPress={() => openModal('data')}>
          <Text style={Global.formSelect}>{selectedData || 'Selecione'}</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Button style={Global.Button} title={"Cadastrar"} />
      </View>


      {/* Modais */}
      <Modal transparent={true} animationType="slide" visible={isModalVisible === 'empresa'}>
        <View style={Global.formSelectModal}>
          <Text >Escolha uma empresa:</Text>
          <FlatList
            data={empresas}
            renderItem={({ item }) => renderItem(item, setSelectedEmpresa)}
            keyExtractor={(item) => item}
          />
          <TouchableOpacity onPress={closeModal}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={isModalVisible === 'cargo'}>
        <View style={Global.formSelectModal}>
          <Text >Escolha um cargo:</Text>
          <FlatList
          
            data={cargos}
            renderItem={({ item }) => renderItem(item, setSelectedCargo)}
            keyExtractor={(item) => item}
          />
          <TouchableOpacity onPress={closeModal}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={isModalVisible === 'data'}>
        <View  style={Global.formSelectModal}>
          <Text>Escolha uma data:</Text>
          <FlatList
            data={datas}
            renderItem={({ item }) => renderItem(item, setSelectedData)}
            keyExtractor={(item) => item}
          />
          <TouchableOpacity onPress={closeModal}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
}
