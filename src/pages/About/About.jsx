import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Cadastro() {
  const navigation = useNavigation();
  function navigateToHome() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sobre</Text>

      <Text style={styles.subtitle}>Milena, 22 anos, 8° Design Digital.</Text>
      <Text style={styles.txt}>
        "faço projetos como designer UX/UI, ás vezes me aventuro na programação.
        Essa aplicação foi construída para a disciplina de PDIM"
      </Text>

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
  );
}
