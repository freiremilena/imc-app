import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

import message from "../../components/ImcMessage/IMCMsg";

export default function Cadastro() {
  const navigation = useNavigation();
  function navigateToHome() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Resultado</Text>

      <Text style={styles.subtitle}>Milena, 22 anos, 8° Design Digital.</Text>

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
