import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Image } from 'react-native';
import logo from './assets/logo.png';
import styles from './Style';

export default function App(): React.JSX.Element {
  const [showRegistration, setShowRegistration] = useState(false);
  function voltarPrincipal(){
    setShowRegistration((oldVlue:boolean) => {
        return !oldVlue
    })
  }

  return (
    <View style={styles.container}>
      {showRegistration ? (
        
        <View>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.text2}>Qual seu nome?</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
          />

          <Text style={styles.text2}>Qual sua idade?</Text>
          <TextInput
            style={styles.input}
            placeholder="Idade"
            keyboardType='number-pad'
          />

          <Text style={styles.text2}>Qual seu email?</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType='email-address'
          />

          <Text style={styles.text2}>Digite seu endereço</Text>
          <TextInput
            style={styles.noteInput}
            placeholder="Digite aqui..."
            multiline={true}
          />

          <Text style={styles.text2}>Fale com agente</Text>
          <TextInput
            style={styles.noteInput}
            placeholder="Digite aqui..."
            multiline={true}
          />

          <Pressable style={styles.button} onPress={voltarPrincipal}>
            <Text style={styles.text1}>Enviar</Text>
          </Pressable>
        </View>
        
      ) : (
        <>
          <Image source={logo} style={styles.logoInicio} />
          <Pressable style={styles.button} onPress={voltarPrincipal}>
            <Text style={styles.text1}>Ativar Bat Sinal</Text>
          </Pressable>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
