import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Bean from "../../../assets/bean.jpg";
import styles from "./styles";

const data = {
  nome: "",
  idade: null,
  email: "",
};

export default function Cadastro() {
  const navigation = useNavigation();
  const [modalActive, setModalActive] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [idadeValue, setIdadeValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  function navigateToHome() {
    navigation.navigate("Home");
  }
  function register() {
    data.nome = nameValue;
    data.idade = idadeValue;
    data.email = emailValue;
    setModalActive(true);
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalActive}
        onRequestClose={() => setModalActive(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.titleModal}>Perfil</Text>

            <Image style={styles.profileModal} source={Bean} />

            <Text style={styles.modalInformation}>Nome: {data.nome}</Text>
            <Text style={styles.modalInformation}>idade: {data.idade}</Text>
            <Text style={styles.modalInformation}>e-mail: {data.email}</Text>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => {
                  navigateToHome();
                }}
              >
                home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.title}> Cadastro</Text>

      <TextInput
        onChangeText={(text) => setNameValue(text)}
        value={nameValue}
        style={styles.input}
        placeholder="nome"
      />
      <TextInput
        onChangeText={(text) => setIdadeValue(text)}
        value={idadeValue}
        style={styles.input}
        placeholder="idade"
      />
      <TextInput
        onChangeText={(text) => setEmailValue(text)}
        value={emailValue}
        style={styles.input}
        placeholder="e-mail"
      />
      <TouchableOpacity style={styles.button} onPress={() => register()}>
        <Text style={styles.buttonText}>okay</Text>
      </TouchableOpacity>
    </View>
  );
}
