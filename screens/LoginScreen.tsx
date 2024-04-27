import React, {useState} from "react";
import { Button, TextInput, View } from "react-native";
import auth from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
        auth().signInWithEmailAndPassword(email, password);
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
          <Button title="Login" onPress={handleLogin} />
          <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
      );
    };
    
    export default LoginScreen;