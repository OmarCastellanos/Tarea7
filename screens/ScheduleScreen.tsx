import React, {useState, useEffect}from "react";
import { Button, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";

const ScheduleScreen = ({ }) => {
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
        <View>
            <TextInput
            placeholder="Equipo 1"
            onChangeText={setEquipo1}
            value={equipo1}
            />
            <TextInput 
            placeholder="Equipo 2"
            onChangeText={setEquipo2}
            value={equipo2}
            />
            <TextInput
            placeholder="Fecha"
            onChangeText={setFecha} 
            value={fecha}
            />
            <TextInput 
            placeholder="Cancha"
            onChangeText={setCancha}
            value={cancha}
            />
            <Button title="Agendar Partido" onPress={handleSchedule} />
        </View>
    );
};

export default ScheduleScreen;