import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default class Cadastro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Cadastro</Text>

        <TextInput style={styles.input} placeholder="nome" />
        <TextInput style={styles.input} placeholder="idade" />
        <TextInput style={styles.input} placeholder="e-mail" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>okay</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
