import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import axios from "axios";
import Global from "../../styles/Global";

export default function Candidatura() {
  const [isModalVisible, setIsModalVisible] = useState("");
  const [empresas, setEmpresas] = useState([]);
  const [cargos, setCargos] = useState([]);
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [selectedDataInicial, setSelectedDataInicial] = useState(null);
  const [selectedDataFinal, setSelectedDataFinal] = useState(null);

  useEffect(() => {
    // Buscar empresas da API
    axios
      .get("http://localhost/jobApp-api/empresa")
      .then((response) => {
        setEmpresas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao recuperar empresas:", error);
      });

    // Buscar cargos da API
    axios
      .get("http://localhost/jobApp-api/cargo")
      .then((response) => {
        setCargos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao recuperar cargos:", error);
      });
  }, []);

  const openModal = (modalName) => {
    setIsModalVisible(modalName);
  };

  const closeModal = () => {
    setIsModalVisible(null);
  };

  const handleCadastro = async() => {
    try {
      // Verificar se todos os campos necessários estão preenchidos
      if (!selectedEmpresa || !selectedCargo || !selectedDataInicial || !selectedDataFinal) {
        console.error("Por favor, preencha todos os campos.");
        return;
      }

      const empresaId = Number(selectedEmpresa.id);
      const cargoId = Number(selectedCargo.id);
      const dataInicial = selectedDataInicial.toISOString().slice(0, 19);
      const dataFinal = selectedDataFinal.toISOString().slice(0, 19);
  
      // Enviar os dados para a API
      const response = await axios.post("http://localhost/jobApp-api/vaga/add", {
        empresa_id: empresaId,
      cargo_id: cargoId,
      data_inicial: dataInicial,
      data_final: dataFinal,
      });

      // Verificar se a API respondeu com sucesso
      if (response.status === 200) {
       // console.log("Vaga cadastrada com sucesso!");
        // Limpar os campos após o cadastro
        setSelectedEmpresa(null);
        setSelectedCargo(null);
        setSelectedDataInicial(null);
        setSelectedDataFinal(null);
        alert('Cargo cadastrado com sucesso!');
      } else {
        console.error("Erro ao cadastrar vaga aqui:", response.data);
      }
    } catch (error) {
      console.error("Erro ao cadastrar vaga:", error.message);
    }
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };

  const renderItem = (item, onSelect) => (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <Text>{item.nome}</Text>
    </TouchableOpacity>
  );
  const navigation =useNavigation();

  const handleVoltarMenu = () => {
    navigation.goBack()
  };
  return (
    <ImageBackground source={require("../../fundo.png")}>
      <FontAwesome
        style={Global.Notification}
        name="bell"
        size={30}
        color="white"
      />
     <TouchableOpacity onPress={() => handleVoltarMenu()}>
    <FontAwesome name="arrow-left" size={30} color="white" />
  </TouchableOpacity>

      <View style={Global.form}>
        <Text style={Global.formText}>Cadastre uma vaga</Text>

        <SafeAreaView>
          <Text>Empresa</Text>
          <TouchableOpacity onPress={() => openModal("empresa")}>
            <Text style={Global.formSelect}>
              {selectedEmpresa?.nome || "Selecione"}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView>
          <Text>Cargo</Text>
          <TouchableOpacity onPress={() => openModal("cargo")}>
            <Text style={Global.formSelect}>
              {selectedCargo?.nome || "Selecione"}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView>
          <Text>Data Inicial</Text>
          <TouchableOpacity onPress={() => openModal("dataInicial")}>
            <Text style={Global.formSelect}>
              {selectedDataInicial
                ? formatDate(selectedDataInicial)
                : "Selecione"}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView>
          <Text>Data Final</Text>
          <TouchableOpacity onPress={() => openModal("dataFinal")}>
            <Text style={Global.formSelect}>
              {selectedDataFinal ? formatDate(selectedDataFinal) : "Selecione"}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>

        <TouchableOpacity
          style={Global.ButtonForm}
          onPress={handleCadastro}
        >
          <Text style={Global.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Modais */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible === "empresa"}
      >
        <View style={Global.formSelectModal}>
          <Text>Escolha uma empresa:</Text>
          <FlatList
            data={empresas}
            renderItem={({ item }) => renderItem(item, setSelectedEmpresa)}
            keyExtractor={(item) => item.id.toString()}
          />
          <TouchableOpacity onPress={closeModal}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible === "cargo"}
      >
        <View style={Global.formSelectModal}>
          <Text>Escolha um cargo:</Text>
          <FlatList
            data={cargos}
            renderItem={({ item }) => renderItem(item, setSelectedCargo)}
            keyExtractor={(item) => item.id.toString()}
          />
          <TouchableOpacity onPress={closeModal}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* modais da data */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible === "dataInicial"}
      >
        <View style={Global.formSelectModal}>
          <Text>Escolha uma data inicial:</Text>
          <DatePicker
            selected={selectedDataInicial}
            onChange={(date) => setSelectedDataInicial(date)}
          />
          <TouchableOpacity onPress={closeModal}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible === "dataFinal"}
      >
        <View style={Global.formSelectModal}>
          <Text>Escolha uma data final:</Text>
          <DatePicker
            selected={selectedDataFinal}
            onChange={(date) => setSelectedDataFinal(date)}
          />
          <TouchableOpacity onPress={closeModal}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ImageBackground>
  );
}
