import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();
  function navigateToRegister() {
    navigation.navigate("Register");
  }
  function navigateToAbout() {
    navigation.navigate("About");
  }
  function navigateToImcApp() {
    navigation.navigate("ImcData");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        my <Text style={{ fontWeight: "bold", color: "#777777" }}>IMC</Text>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigateToRegister();
        }}
      >
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        style={styles.button}
        onPress={() => {
          navigateToImcApp();
        }}
      >
        <Text style={styles.buttonText}>IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigateToAbout();
        }}
      >
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}
