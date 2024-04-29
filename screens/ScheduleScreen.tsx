import React, {useState, useEffect}from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import firestore from "@react-native-firebase/firestore";

const ScheduleScreen = ({navigation}: any) => {
    const [id, setId] = useState('');
    const [equipo1, setEquipo1] = useState('');
    const [equipo2, setEquipo2] = useState('');
    const [fecha, setFecha] = useState('');
    const [cancha, setCancha] = useState('');

    const handleSchedule = () => {
        firestore().collection('matches').add({
            equipo1,
           equipo2,
           fecha,
           cancha,
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Equipo 1"
            onChangeText={setEquipo1}
            value={equipo1}
            />
            <TextInput 
            style={styles.input}
            placeholder="Equipo 2"
            onChangeText={setEquipo2}
            value={equipo2}
            />
            <TextInput
            style={styles.input}
            placeholder="Fecha"
            onChangeText={setFecha} 
            value={fecha}
            />
            <TextInput
            style={styles.input} 
            placeholder="Cancha"
            onChangeText={setCancha}
            value={cancha}
            />
            <Button title="Agendar Partido" onPress={handleSchedule} color={"#007bff"}/>
            <TouchableOpacity onPress={() => navigation.navigate('Matches')}>
            <Text >Ver Partidos</Text>
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
});

export default ScheduleScreen;