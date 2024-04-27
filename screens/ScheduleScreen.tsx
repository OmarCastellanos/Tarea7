import React, {useState, useEffect}from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";

const ScheduleScreen = ({ }) => {
    const [id, setId] = useState('');
    const [equipo1, setEquipo1] = useState('');
    const [equipo2, setEquipo2] = useState('');
    const [fecha, setFecha] = useState('');
    const [cancha, setCancha] = useState('');

    const handleSchedule = () => {
        firestore().collection('matches').add({
            id,
            equipo1,
           equipo2,
           fecha,
           cancha,
        });
    };

    const handleUpdate = () => {
        firestore().collection('matches').doc(id).update({
            equipo1,
            equipo2,
            fecha,
            cancha,
        });
    };

    const handleDelete = () => {
        firestore().collection('matches').doc(id).delete();
    };

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="ID"
            onChangeText={setId}
            value={id}
            />
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
            <Button title="Actualizar Partido" onPress={handleUpdate} color={"#28a745"}/>
            <Button title="Eliminar Partido" onPress={handleDelete} color={"#dc3545"}/> 
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