import React, { useState } from "react";
import { StyleSheet, TouchableOpacity,Button, TextInput, View } from "react-native";
import auth from "@react-native-firebase/auth";
import LoginScreen from "./LoginScreen";

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
        auth().createUserWithEmailAndPassword(email, password);
      };
    
      return (
        <View style={styles.container}>
          <TextInput
          style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
          style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Button title="Registrar" onPress={handleRegister} color={"#007bff"} />
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
      },
      input: {
        width: '100%',
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        backgroundColor: '#ffffff',
      },
    });
    
    export default RegisterScreen;