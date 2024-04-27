import React, {useState} from "react";
import { Button, StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import auth from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
        auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Inicio de sesion exitoso!');
        navigation.navigate('Schedule');
      }) 
      .catch(error => {
         if (error.code === 'auth/invalid-email') {
           Alert.alert('Verifique su correo electrónico o contraseña');
         }
         console.error(error);
      });
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
          <Button title="Login" onPress={handleLogin} color={"#007bff"} />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Nuevo Usuario?</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#f7f7f7'
        },
        input: {
          width: '100%',
          marginBottom: 20,
          padding: 10,
          borderWidth: 1,
          borderColor: '#cccccc',
          borderRadius: 5,
          backgroundColor: '#ffffff'
        },
        registerText: {
          color: '#007bff',
          textDecorationLine: 'underline',
        },

      });

    export default LoginScreen;