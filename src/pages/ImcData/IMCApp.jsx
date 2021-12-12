import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Calculadora from "../../components/ImcCalc/IMCCalc";

import styles from "./styles";

export default class CalculadoraApp extends Component {
  constructor(props) {
    super(props);
    this.state = { altura: null, peso: null };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Calcular IMC</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite a altura"
          onChangeText={(altura) => this.setState({ altura })}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o peso"
          onChangeText={(peso) => this.setState({ peso })}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>okay</Text>
        </TouchableOpacity>

        <Calculadora altura={this.state.altura} peso={this.state.peso} />
      </View>
    );
  }
}
