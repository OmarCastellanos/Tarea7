import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import auth from "@react-native-firebase/auth";

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
        auth().createUserWithEmailAndPassword(email, password);
      };
    
      return (
        <View>
          <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Button title="Register" onPress={handleRegister} />
        </View>
      );
    };

    export default RegisterScreen;