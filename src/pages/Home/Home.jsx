import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();
  function navigateToRegister() {
    navigation.navigate("Register");
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
        <Text style={styles.buttonText}>cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>imc</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>sobre</Text>
      </TouchableOpacity>
    </View>
  );
}
