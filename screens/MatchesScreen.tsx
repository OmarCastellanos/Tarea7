import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNPickerSelect from 'react-native-picker-select';

type Match = { label: string, value: string };

const MatchesScreen = () => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
    const [selectedMatch, setSelectedMatch] = useState<any | null>(null);

    useEffect(() => {
        const fetchMatches = async () => {
            const matchesCollection = await firestore().collection('matches').get();
            setMatches(matchesCollection.docs.map(doc => ({ label: doc.id, value: doc.id })));
        };
        fetchMatches();
    }, []);

    useEffect(() => {
        const fetchMatch = async () => {
            if (selectedMatchId) {
                const matchDoc = await firestore().collection('matches').doc(selectedMatchId).get();
                const matchData = matchDoc.data();
                if (matchData) {
                    setSelectedMatch(matchData);
                }
            }
        };
        fetchMatch();
    }, [selectedMatchId]);

    const updateMatch = async (updatedFields: {[key: string]: any}) => {
        if (selectedMatchId) {
            await firestore().collection('matches').doc(selectedMatchId).update(updatedFields);
            if (selectedMatch) {
                setSelectedMatch({ ...selectedMatch, ...updatedFields });
            }
        }
    };

    const deleteMatch = async () => {
        if (selectedMatchId) {
            await firestore().collection('matches').doc(selectedMatchId).delete();
            setSelectedMatchId(null);
            setSelectedMatch(null);
        }
    };

    return (
        <View style={styles.container}>
            <RNPickerSelect
                onValueChange={(value) => setSelectedMatchId(value)}
                items={matches}
                placeholder={{ label: 'Selecciona un partido...', value: null }}
            />
            {selectedMatch && (
                <>
                    <Text>ID: {selectedMatchId}</Text>
                    <TextInput
                        value={selectedMatch.equipo1}
                        onChangeText={(value) => updateMatch({ equipo1: value })}
                    />
                    <TextInput
                        value={selectedMatch.equipo2}
                        onChangeText={(value) => updateMatch({ equipo2: value })}
                    />
                    <TextInput
                        value={selectedMatch.fecha}
                        onChangeText={(value) => updateMatch({ fecha: value })}
                    />
                    <TextInput
                        value={selectedMatch.cancha}
                        onChangeText={(value) => updateMatch({ cancha: value })}
                    />
                    <Button title="Eliminar partido" onPress={deleteMatch} />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});

export default MatchesScreen;
